import type { IEditor } from 'contracts/editor';
import type { IState } from 'contracts/state/state';
import FEditor from '../factories/editor';
import FState from '../factories/state';
import type { TSettings } from 'types/settings';

import Settings from './settings';

/**
 * What's on your mind? ... ✏️
 */
class Composer {
	constructor(settings: TSettings) {
		Settings.use(settings);

		console.log("here")
		this.assemble();
	}

	/**
	 * Assemble the editor.
	 */
	private assemble(): void {
		const editor: IEditor = new FEditor().assemble();
		const state: IState = new FState().assemble();

		editor.editable(Settings.get('editable'))
		editor.setPlaceholder(Settings.get('placeholder'));

		editor.compose(state);
	}
}

export default Composer;
