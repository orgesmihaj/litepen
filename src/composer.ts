import TSettings from 'types/settings';
import Settings from './settings';
import EditorUI from './ui/editorUI';
import Mutation from './mutation';
import Editor from './editor';

import './assets/sass/objects/editor.scss';

class Composer {
	constructor(settings: TSettings) {
		const editor = new Editor(
			new EditorUI(new Settings(settings)),
			new Mutation()
		);

		editor.ignite();
	}
}

/**
 * OUTPUT
 */
new Composer({
	holder: document.querySelector('.composer'),
	placeholder: 'Write something cool...',
});

export default Composer;
