The `autumn` package is a Node-based CLI tool that exports answers from a Formspring ([Spring.me](http://spring.me)) account.

It is called **Autumn** (antonymous to the “Spring” it exports).

**Note:**   the package is currently in an early phase of its development and thus does not have even minimal feature completeness.

## Installing Autumn

[![(npm package version)](https://nodei.co/npm/autumn.png?downloads=true)](https://npmjs.org/package/autumn) [![(a histogram of downloads)](https://nodei.co/npm-dl/autumn.png?months=3&height=2)](https://npmjs.org/package/autumn)

* Latest packaged version: `npm install -g autumn`

* Latest githubbed version: `npm install -g https://github.com/Mithgol/node-autumn/tarball/master`

You may visit https://github.com/Mithgol/node-autumn#readme occasionally to read the latest `README` because the package's version is not planned to grow after changes when they happen in `README` only. (And `npm publish --force` is [forbidden](http://blog.npmjs.org/post/77758351673/no-more-npm-publish-f) nowadays.)

## Testing Autumn

[![(build testing status)](https://travis-ci.org/Mithgol/node-autumn.svg?branch=master)](https://travis-ci.org/Mithgol/node-autumn)

The tests are not included in the npm package of the module (to keep it small). Use the version from GitHub.

It is necessary to install [JSHint](http://jshint.com/) for testing.

* You may install JSHint globally (`npm install jshint -g`) or locally (`npm install jshint` in the directory of Autumn).

After that you may run `npm test` (in the directory of Autumn).

Only the errors in JavaScript source code are caught; the code's behaviour is not tested.

## License

MIT license (see the `LICENSE` file).