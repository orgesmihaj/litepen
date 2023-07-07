import Composer from '@litepen/core';

import './sass/semantic.scss';
import './sass/composer.scss';

new Composer({
	holder: document.getElementById('playground__composer'),
	placeholder: 'Write something...',
});