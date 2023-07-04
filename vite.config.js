import { resolve } from 'path'

/**
 * 🤝Aliases for importing modules.
 */
const ALIASES = {
	'@': resolve(__dirname, './src'),
	'@assets': resolve(__dirname, './src/assets'),
	'@contacts': resolve(__dirname, './contacts'),
	'@factories': resolve(__dirname, './factories'),
	'@logger': resolve(__dirname, './src/logger'),
	'@src': resolve(__dirname, './src'),
	'@types': resolve(__dirname, './types'),
}

/**
 * 🧱The configuration for building a library.
 */
const LIBRARY_BUILD_CONFIG = {
	cssCodeSplit: false,
	entry: resolve(__dirname, 'src/composer.ts'),
	fileName: 'composer',
	formats: ['es', 'umd', 'cjs', 'iife'],
	name: 'composer',
	sourcemap: false,
};

/**
 * 🔎The configuration for testing.
 */
const TEST_CONFIG = {
	environment: 'jsdom',
};

/** @type {import('vite').UserConfig} */
export default {
	build: { lib: LIBRARY_BUILD_CONFIG },
	resolve: { alias: ALIASES },
	test: TEST_CONFIG,
};
