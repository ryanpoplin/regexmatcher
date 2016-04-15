'use strict';

// this file will not be checked via eslint, however, it meets the linting standards
// npm install mocha -g
// to run these tests in your terminal; npm test

const expect = require('chai').expect,
    regexmatcher = require('../regexmatcher'),
    regex = /https?/gi;

describe('regexmatcher module with the following regular expression argument: /https?/gi', () => {
    it('should return 4 matches from the following string', (done) => {
        const results = regexmatcher.getMatches(regex, 'http HTTPS httpS SPTTH HTTP');
        expect(results.matches).to.have.length(4);
        done();
    });

    it('should return 1 match from the following string', (done) => {
        const results = regexmatcher.getMatches(regex, 'http');
        expect(results.matches).to.have.length(1);
        done();
    });

    it('should return 0 matches from the following string', (done) => {
        const results = regexmatcher.getMatches(regex, 'HPSTT');
        expect(results.matches).to.have.length(0);
        done();
    });
});