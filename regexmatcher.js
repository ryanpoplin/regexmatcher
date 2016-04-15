'use strict';

var _ = require('lodash');

module.exports.getMatches = function (regex, string) {
		deep = _.cloneDeep([regex]),
		regexClone = deep[0],
		results = [],
		resultsContainer = {},
		match, 
		i;

	while (regex.exec(string) !== null) {
		match = regexClone.exec(string);
		if (i === undefined) {
			i = match.index;
			results.push(match);
		} else if (match.index > i) {
			i = match.index;
			results.push(match);	
		} else if (match.index === i) {
			break;
		}
	}
	resultsContainer.matches = results;

	switch (results.length) {
		case 0:
			resultsContainer.summary = 'There are 0 matches';
			break;
		case 1:
			resultsContainer.summary = 'There is 1 match.';	
			break;
		default:
			resultsContainer.summary = `There are ${results.length} matches`;
			break;
	}

	return resultsContainer;
};