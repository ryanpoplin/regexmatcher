# regexmatcher

## Synopsis

### regexmatcher is a module for regular expression practice, testing and development with Node.js in mind.

## Installation

```
# access your terminal
npm install --save regexmatcher
```

## Example

```javascript
const regexmatcher = require('regexmatcher'),
    matches = regexmatcher.getMatches(/https?/gi, 'http HTTPS httpS SPTTH https');
console.log(matches);
// { matches: [ [ 'http', index: 0, input: 'http HTTPS httpS SPTTH https' ], [ 'HTTPS', index: 5, input: 'http HTTPS httpS SPTTH https' ], [ 'httpS', index: 11, input: 'http HTTPS httpS SPTTH https' ], [ 'https', index: 23, input: 'http HTTPS httpS SPTTH https' ] ], summary: 'There are 4 matches' }
```

## Motivation

### I wanted to quickly practice and test strings for regular expression matches without the overhead of UI tools on the web.

### Running the example

```
# access the regexmatcher directory in your terminal
npm start
```

### Running the linting and unit tests

```
# access the regexmatcher directory in your terminal
npm test
```