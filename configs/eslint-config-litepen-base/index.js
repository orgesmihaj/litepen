/**
 * 🚦ESLint configuration.
 *
 * @see https://eslint.org/docs/latest/use/configure
 */
module.exports = {
	env: {
		es6: true,
	},
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
	extends: [
		'airbnb-base',
		'airbnb-typescript/base',
		'turbo',
		'prettier',

		/**
		 * Litepen-specific rules.
		 */
		...[
			'./rules/general.js',
			'./rules/typescript.js',
		].map(rule => require.resolve(rule))
	],
	parserOptions: {
		ecmaVersion: 13,
		sourceType: 'module',
	},
};
