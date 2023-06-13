module.exports = {
	rules: {
		'@typescript-eslint/member-ordering': [
			'error',
			{
				default: {
					memberTypes: ['field', 'constructor', 'static-method', 'method'],
					order: 'alphabetically-case-insensitive',
				},
			},
		]
	}
};
