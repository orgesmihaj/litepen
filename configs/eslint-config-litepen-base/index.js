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
	extends: ['airbnb-base', 'airbnb-typescript/base', 'turbo', 'prettier'],
	rules: {
		...require('./rules/javascript.js').rules,
		...require('./rules/typescript.js').rules,
	},
	parserOptions: {
		ecmaVersion: 13,
		sourceType: 'module',
	},
};
