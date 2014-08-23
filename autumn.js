#!/usr/bin/env node

var ansi = require('ansi')(process.stdout);
var request = require('request');
var fs = require('fs');
var path = require('path');

var logOK = function(logElement){
   ansi.black().bg.green().write('  OK  ').reset().write(' ');
   console.log(logElement);
};

var logFAIL = function(logElement){
   ansi.brightWhite().bg.red().write(' FAIL ').reset().write(' ');
   console.log(logElement);
};

var logSTATUS = function(logElement){
   ansi.brightYellow().bg.blue().write('STATUS').reset().write(' ');
   console.log(logElement);
};

if( process.argv.length < 3 ){
   logFAIL('Missing parameter.');
   logFAIL(
      "Run `autumn username` to export answers from the given user's account."
   );
   process.exit(1);
}

var userName = process.argv[2];

logOK("Exporting answers from the given user's account: " + userName);

var answers = [];

var writeAnswers = function(){
   var filePath = path.resolve(process.cwd(), userName + '.autumn.json');
   fs.writeFileSync(filePath, JSON.stringify(answers, null, '   '));
   logOK('JSON file written: ' + filePath);
};

var performNextStep = function(lastID){
   var nextURL = 'http://beta-api.formspring.me/answered/list/' + userName;
   if( typeof lastID !== 'undefined' ){
      nextURL += '?before=' + lastID;
   }
   request({ url: nextURL, json: true }, function(err, response, body){
      if( err || response.statusCode !== 200 ){
         logFAIL(nextURL);
         logSTATUS('Error:');
         console.log(err);
         logSTATUS('Response:');
         console.log(response);
         process.exit(2);
      }
      logOK(nextURL);
      if( body.status !== 'ok' ){
         logFAIL('status is not ok');
         logSTATUS('Response:');
         console.log(response);
         process.exit(3);
      }
      if( !Array.isArray(body.response) || body.response.length < 1 ){
         logFAIL('response does not contain any elements');
         logSTATUS('Response:');
         console.log(response);
         process.exit(4);
      }
      if( typeof lastID === 'undefined' ){
         answers = body.response;
         if( answers.length < 2 ) return writeAnswers();
      } else { // results of an additional request
         if( body.response[0].id !== answers[answers.length - 1].id ){
            logFAIL('id mismatch');
            logSTATUS('Response body:');
            console.log(body.response);
            process.exit(5);
         } else body.response.shift();
         if( body.response.length < 1 ){
            return writeAnswers();
         } else answers = answers.concat(body.response);
      }
      // perform next request
      var beforeID = answers[answers.length - 2].id;
      if( typeof beforeID === 'undefined' ){
         logFAIL('undefined id detected');
         logSTATUS('Answers:');
         console.log(answers);
         process.exit(6);
      }
      setImmediate(function(){
         performNextStep(beforeID);
      });
   });
};

performNextStep();