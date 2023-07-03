/**
 * These rules are related to possible syntax or logic errors
 * in JavaScript code.
 */
module.exports = {
	/**
	 * Any use of console methods will be highlighted as
	 * a linting error, helping to remind you to remove
	 * such calls before committing your code.
	 */
	'no-console': "error",

	/**
	 * Shorthand syntax for object properties and methods
	 * should be a matter of preference, not a linting error.
	 */
	'object-shorthand': "off"
};
