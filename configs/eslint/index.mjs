import { GENERAL_RULES, TYPESCRIPT_RULES } from './rules.js';

/**
 * 🚦ESLint configuration.
 */
export default {
	env: {
		browser: true,
		es2021: true,
	},
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
	extends: [
		'airbnb-base',
		'airbnb-typescript/base',
		'next',
		'turbo',
		'prettier',
	],
	rules: {
		...GENERAL_RULES,
		...TYPESCRIPT_RULES,
	},
	parserOptions: {
		ecmaVersion: 13,
		sourceType: 'module',
	},
};
