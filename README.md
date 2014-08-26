The `autumn` package is a CLI tool that exports answers from a Formspring ([Spring.me](http://spring.me)) account.

It requires [Node.js](http://nodejs.org/) to run and [npm](https://www.npmjs.org/) to be installed.

It is called **Autumn** (antonymous to the “Spring” it exports).

## Installing Autumn

[![(npm package version)](https://nodei.co/npm/autumn.png?downloads=true&downloadRank=true)](https://npmjs.org/package/autumn) [![(a histogram of downloads)](https://nodei.co/npm-dl/autumn.png?months=3&height=3)](https://npmjs.org/package/autumn)

* Latest packaged version: `npm install -g autumn`

* Latest githubbed version: `npm install -g https://github.com/Mithgol/node-autumn/tarball/master`

You may visit https://github.com/Mithgol/node-autumn#readme occasionally to read the latest `README` because the package's version is not planned to grow after changes when they happen in `README` only. (And `npm publish --force` is [forbidden](http://blog.npmjs.org/post/77758351673/no-more-npm-publish-f) nowadays.)

## Running Autumn

Run `autumn username` (for example, `autumn Mithgol`) to export answers from the specified Formspring ([Spring.me](http://spring.me)) account.

The list of questions and answers is exported to the file `username.autumn.json` in the current directory. That file is generated as UTF-8 text containing a [JSON](http://json.org/) array of answers (in reverse chronological order).

Example:

![(screenshot)](https://cloud.githubusercontent.com/assets/1088720/4023135/a658754e-2b77-11e4-88e2-6f5f8dfe5628.gif)

## Testing Autumn

[![(build testing status)](https://travis-ci.org/Mithgol/node-autumn.svg?branch=master)](https://travis-ci.org/Mithgol/node-autumn)

It is necessary to install [JSHint](http://jshint.com/) for testing.

* You may install JSHint globally (`npm install jshint -g`) or locally (`npm install jshint` in the directory of Autumn).

After that you may run `npm test` (in the directory of Autumn).

Only the errors in JavaScript source code are caught; the code's behaviour is not tested.

## License

MIT license (see the `LICENSE` file).