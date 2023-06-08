import path from 'node:path';

/**
 * 🤝Aliases for importing modules.
 */
const ALIASES = {
	'@': path.resolve(__dirname, './src'),
	'@assets': path.resolve(__dirname, './src/assets'),
	'@contacts': path.resolve(__dirname, './contacts'),
	'@factories': path.resolve(__dirname, './factories'),
	'@logger': path.resolve(__dirname, './src/logger'),
	'@src': path.resolve(__dirname, './src'),
	'@types': path.resolve(__dirname, './types'),
}

/**
 * 🧱The configuration for building a library.
 */
const LIBRARY_BUILD_CONFIG = {
	cssCodeSplit: false,
	entry: path.resolve(__dirname, 'src/composer.ts'),
	fileName: 'composer.js',
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

export default {
	build: { lib: LIBRARY_BUILD_CONFIG },
	resolve: { alias: ALIASES },
	test: TEST_CONFIG,
};
