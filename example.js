'use strict';

const regexmatcher = require('./regexmatcher'),
    results = regexmatcher.getMatches(/\(?\d{3}\)?-?\d{3}-?\d{4}/, '555-555-5555');

(results.matches.length === 1) ? console.log(results.matches[0][0]) : console.log('Please enter a valid North American telephone number...');

console.log(results);