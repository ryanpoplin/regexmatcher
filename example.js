'use strict';

// run 'nodemon example.js' in your terminal to play around.

var regexmatcher = require('./regexmatcher');

var matches = regexmatcher.getMatches(/https?/gi, 'http HTTPS httpS SPTTH https');
console.log(matches); // { matches: [ [ 'http', index: 0, input: 'http HTTPS httpS SPTTH https' ], [ 'HTTPS', index: 5, input: 'http HTTPS httpS SPTTH https' ], [ 'httpS', index: 11, input: 'http HTTPS httpS SPTTH https' ], [ 'https', index: 23, input: 'http HTTPS httpS SPTTH https' ] ], summary: 'There are 4 matches' }