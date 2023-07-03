/**
 * These rules are related to possible syntax or logic errors
 * in TypeScript code.
 */
module.exports = {
	/**
	 * No need to specify file extensions for imports.
	 * Override the default rule from `airbnb-base`.
	 */
	'import/extensions': [
		'error',
		'ignorePackages',
		{
			'': 'never',
			js: 'never',
			jsx: 'never',
			ts: 'never',
			tsx: 'never',
		},
	],

	/**
	 * Enforce a specific sort order for class members
	 * and interfaces. Keep the code clean and readable.
	 */
	'@typescript-eslint/member-ordering': [
		'error',
		{
			default: {
				memberTypes: [
					'field', 'constructor', 'static-method', 'method'
				],
				order: 'alphabetically-case-insensitive',
			},
		},
	]
};
