/**
 * 👮ESLint Rules.
 *
 * @see https://eslint.org/docs/rules/
 */

export const GENERAL_RULES = {
	'class-methods-use-this': 'off',
	'no-new': 'off',
	'spaced-comment': 0,
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
}

export const TYPESCRIPT_RULES = {
	'@typescript-eslint/member-ordering': [
		'error',
		{
			default: {
				memberTypes: ['field', 'constructor', 'static-method', 'method'],
				order: 'alphabetically-case-insensitive',
			},
		},
	]
}
