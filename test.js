var assert = require('assert');

var calc = require('./math.js');


// Tests are hierarchical. Here we define a test suite for our calculator.
describe('Math Unit Tests', function() {
	// And then we describe our testcases.
	it('returns 2+2=4', function(done) {
		assert.equal(calc.add(2, 2), 5);
		// Invoke done when the test is complete.
		done();
	});

	it('returns 2*2=4', function(done) {
		assert.equal(calc.multiply(2, 2), 4);
		// Invoke done when the test is complete.
		done();
    });
    it('returns 2/2=1', function(done) {
		assert.equal(calc.divide(2, 2), 1);
		// Invoke done when the test is complete.
		done();
    });
    it('returns 2-2=0', function(done) {
		assert.equal(calc.subtract(2, 2), 0);
		// Invoke done when the test is complete.
		done();
	});
});
