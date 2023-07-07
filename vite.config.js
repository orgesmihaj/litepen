import { resolve } from 'path'

/**
 * 🤝Aliases for importing modules.
 */
const ALIASES = {
	'@': resolve(__dirname, './src'),
	'@assets': resolve(__dirname, './assets'),
	'@contacts': resolve(__dirname, './contacts'),
	'@factories': resolve(__dirname, './factories'),
	'@icons': resolve(__dirname, './assets/icons'),
	'@logger': resolve(__dirname, './src/logger'),
	'@sass': resolve(__dirname, './src/assets/sass'),
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
