import { TComposerAttributes } from 'types/editorUI';

/**
 * EditorUI helper.
 */
class HEditorUI {
	/**
	 * Create a dummy composer for testing purposes.
	 */
	static dummyComposer(attributes: TComposerAttributes = []): void {
		const composer: HTMLElement = document.createElement('div');
		composer.classList.add('composer');

		Object.entries(attributes).forEach(([key, attribute]) => {
			composer.setAttribute(key, attribute);
		});

		document.body.appendChild(composer);
	}
}

export default HEditorUI;
