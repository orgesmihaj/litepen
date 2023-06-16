const TRIGGER_ERROR = 2;

module.exports = {
	rules: {
		/**
		 * Any use of console methods will be highlighted as
		 * a linting error, helping to remind you to remove
		 * such calls before committing your code.
		 */
		'no-console': TRIGGER_ERROR,
	}
};
