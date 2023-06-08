import Composer from '@litepen/core';

new Composer({
	format: 'json',
	holder: document.querySelector('.playground__composer'),
	placeholder: 'Write something cool...',
	onUpdate: state => {
		document.querySelector('#playground-code').innerHTML = JSON.stringify(
			state,
			null,
			2
		);
	},
});
