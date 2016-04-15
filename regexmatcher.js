'use strict';

var _ = require('lodash');

module.exports.getMatches = function (regex, string) {
		var deep = _.cloneDeep([regex]),
		regexClone = deep[0],
		results = [],
		resultsContainer = {},
		match, 
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

	(results.length === 1) ? resultsContainer.summary = 'There is 1 match.' : resultsContainer.summary = 'There are ' + results.length + ' matches';

	return resultsContainer;
};