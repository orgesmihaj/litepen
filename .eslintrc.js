module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ['airbnb-base', 'airbnb-typescript/base', 'prettier'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 13,
		sourceType: 'module',
		project: './tsconfig.json',
	},
	plugins: ['@typescript-eslint'],
	rules: {
		'@typescript-eslint/member-ordering': [
			'error',
			{
				default: {
					memberTypes: ['field', 'constructor', 'static-method', 'method'],
					order: 'alphabetically-case-insensitive',
				},
			},
		],
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
	},
};
