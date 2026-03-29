/**
 * Safely divide two numbers.
 *
 * - Validates inputs are numbers (not NaN).
 * - Handles division by zero consistently with JS (`Infinity`, `-Infinity`, or `NaN`).
 *
 * @param {number} a - Dividend
 * @param {number} b - Divisor
 * @returns {number} The quotient of `a / b`
 * @throws {TypeError} If either argument is not a valid number
 * @throws {Error} If divisor is zero and you want an exception (not used by default)
 */
function divide(a, b) {
	if (typeof a !== 'number' || Number.isNaN(a)) {
		throw new TypeError('First argument must be a valid number');
	}
	if (typeof b !== 'number' || Number.isNaN(b)) {
		throw new TypeError('Second argument must be a valid number');
	}

	// JavaScript's native behavior is fine for most cases:
	//  x / 0  -> Infinity or -Infinity
	//  0 / 0  -> NaN
	return a / b;
}

// Exports for CommonJS (Node) and browser
if (typeof module !== 'undefined' && module.exports) {
	module.exports = divide;
}
if (typeof window !== 'undefined') {
	window.divide = divide;
}

// If run directly with Node, allow quick CLI usage: `node divide.js 10 2`
if (typeof process !== 'undefined' && process.argv && require.main === module) {
	const args = process.argv.slice(2).map(Number);
	if (args.length < 2) {
		console.error('Usage: node divide.js <numerator> <denominator>');
		process.exit(1);
	}
	try {
		const result = divide(args[0], args[1]);
		console.log(result);
	} catch (err) {
		console.error(err && err.message ? err.message : String(err));
		process.exit(2);
	}
}

/* Usage examples:
	 const divide = require('./divide');
	 console.log(divide(6, 3)); // 2
	 console.log(divide(1, 0)); // Infinity
	 console.log(divide(0, 0)); // NaN
*/
