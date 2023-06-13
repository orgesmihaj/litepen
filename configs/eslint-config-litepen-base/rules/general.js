module.exports = {
	rules: {
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
	}
};
