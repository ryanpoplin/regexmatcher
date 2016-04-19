'use strict';

const cloneDeep = require('lodash').cloneDeep;

module.exports.getMatches = (regex, string) => {

    if (regex instanceof RegExp === false) {
        throw Error('You must pass a RegExp value type for regex');
    }

    if (typeof string !== 'string') {
        throw Error('You must pass in a String value type for string');
    }

    const deep = cloneDeep([regex]),
        regexClone = deep[0],
        results = [],
        resultsContainer = {};

    var match,
        currentMatchIndex;

    while (regex.exec(string) !== null) {
        match = regexClone.exec(string);
        if (currentMatchIndex === undefined) {
            currentMatchIndex = match.index;
            results.push(match);
        } else if (match.index > currentMatchIndex) {
            currentMatchIndex = match.index;
            results.push(match);
        } else {
            break;
        }
    }

    resultsContainer.matches = results;

    (results.length === 1) ? resultsContainer.summary = 'There is 1 match.' : resultsContainer.summary = `There are ${results.length} matches`;

    return resultsContainer;
};