import path from 'node:path';

export default {
	test: { environment: 'jsdom' },

	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			'@assets': path.resolve(__dirname, './src/assets'),
			'@contacts': path.resolve(__dirname, './contacts'),
			'@factories': path.resolve(__dirname, './factories'),
			'@src': path.resolve(__dirname, './src'),
			'@types': path.resolve(__dirname, './types'),
			'@ui': path.resolve(__dirname, './src/ui'),
		},
	},
};
