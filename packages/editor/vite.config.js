import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
	build: {
		lib: {
			entry: resolve(__dirname, './index.ts'),
			fileName: 'index',
			formats: ['es'],
		},
		rollupOptions: {
			output: {
				/**
				 * Only the default export from the entry file is exposed
				 * when the library is consumed.
				 */
				exports: 'default'
			}
		}
	},
	resolve: {
		alias: {
			'@': resolve(__dirname, './src'),
			assets: resolve(__dirname, './assets'),
			contracts: resolve(__dirname, './contracts'),
			factories: resolve(__dirname, './factories'),
			logger: resolve(__dirname, './src/shared/logger'),
			styles: resolve(__dirname, './styles'),
			types: resolve(__dirname, './types'),
		}
	},
	test: {

		/**
		 * JSDOM simulates a browser environment in Node.js,
		 * which is essential for testing frontend components
		 * that rely on the DOM.
		 */
		environment: 'jsdom',
	},
});
