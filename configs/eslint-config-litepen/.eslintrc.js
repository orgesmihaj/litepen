const rules = require("./rules");

/**
 * 🚦ESLint configuration.
 *
 * @see https://eslint.org/docs/latest/use/configure
 */
module.exports = {
	env: {
		/**
		 * Accept global variables that are common in browsers,
		 * such as window, document, and navigator, without throwing
		 * undefined variable errors.
		 */
		browser: true,

		/**
		 * Accept global variables introduced in ES2024, such as
		 * optional chaining, nullish coalescing operators, and
		 * string interpolation.
		 */
		es2024: true,

		/**
		 * Accept global variables specific to Web Workers.
		 */
		worker: true,
	},

	/**
	 * Use a combination of rules that are considered best practices
	 * for both JavaScript and TypeScript
	 */
	extends: [
		"eslint:recommended",
		"plugin:import/recommended",
		"plugin:@typescript-eslint/recommended"
	],

	/**
	 * Read the source code and turn it into a format
	 * that ESLint can understand.
	 */
	parser: "@typescript-eslint/parser",

	/**
	 * Change what syntax the parser recognizes, what kind of
	 * objects the parser produces, and what kind of
	 * syntax errors should be thrown.
	 */
	parserOptions: {
		/**
		 * Support the latest ECMAScript features.
		 */
		"ecmaVersion": 15,

		/**
		 * Interpret the code as ECMAScript modules. This is important where
		 * you are using import and export statements.
		 */
		"sourceType": "module"
	},

	/**
	 * Provide a set of rules that are specifically relevant to
	 * TypeScript syntax and patterns. Essential for linting.
	 */
	plugins: [
		/**
		 * @see https://typescript-eslint.io/getting-started
		 */
		"@typescript-eslint",

		/**
		 * @see https://github.com/import-js/eslint-plugin-import#resolvers
		 */
		"import"
	],

	/**
	 * Share settings across ESLint rules and plugins.
	 */
	"settings": {
		"import/resolver": {
			"typescript": {
				/**
				 * Try to resolve types (e.g., interfaces, type aliases)
				 * as well as values (e.g., classes, functions).
				 */
				"alwaysTryTypes": true,

				/**
				 * Specify an array of paths to TypeScript configuration files.
				 */
				"project": [
					"./tsconfig.json",
					"./packages/*/tsconfig.json"
				],
			}
		}
	},

	/**
	 * Specify a set of custom rules.
	 */
	rules: {
		...rules.core,
		...rules.typescript
	},
}