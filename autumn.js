#!/usr/bin/env node

var ansi = require('ansi')(process.stdout);

var logOK = function(logString){
   ansi.black().bg.green().write('  OK  ').reset().write(' ');
   console.log(logString);
};

var logFAIL = function(logString){
   ansi.brightWhite().bg.red().write(' FAIL ').reset().write(' ');
   console.log(logString);
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