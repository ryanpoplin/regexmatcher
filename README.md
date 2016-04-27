# regexmatcher

## Synopsis

### regexmatcher is a module for regular expression practice, testing and development with Node.js in mind.

## Installation

```
# access your terminal
npm install --save regexmatcher
```

## Example 1

```javascript
const regexmatcher = require('regexmatcher'),
    results = regexmatcher.getMatches(/https?/gi, 'http HTTP https HTTPS ptth PTTH sptth SPTTH');

console.log(results);
/* { matches:
[ [ 'http',
    index: 0,
    input: 'http HTTP https HTTPS ptth PTTH sptth SPTTH' ],
[ 'HTTP',
    index: 5,
    input: 'http HTTP https HTTPS ptth PTTH sptth SPTTH' ],
[ 'https',
    index: 10,
    input: 'http HTTP https HTTPS ptth PTTH sptth SPTTH' ],
[ 'HTTPS',
    index: 16,
    input: 'http HTTP https HTTPS ptth PTTH sptth SPTTH' ] ],
summary: 'There are 4 matches' } */
```

## Example 2

```javascript
const regexmatcher = require('regexmatcher'),
    results = regexmatcher.getMatches(/\(?\d{3}\)?-?\d{3}-?\d{4}/, '555-555-5555');

(results.matches.length === 1) ? console.log(results.matches[0][0]) : console.log('Please enter a valid North American telephone number...'); /* 555-555-5555 */

console.log(results); /* { matches: [ [ '555-555-5555', index: 0, input: '555-555-5555' ] ],
  summary: 'There is 1 match.' } */
```

## Motivation

### I wanted to quickly practice and test strings for regular expression matches without the overhead of UI tools on the web.

### Example Code

```
# access the terminal and go to the regexmatcher directory
# you must npm install to get this code to run
npm install
```

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
