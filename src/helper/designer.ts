import { TComposerAttributes } from 'types/ui/designer';

/**
 * EditorUI helper.
 */
class HDesigner {
	/**
	 * Create a dummy composer for testing purposes.
	 */
	static createDummyComposer(
		attributes: TComposerAttributes = []
	): HTMLElement {
		const composer: HTMLElement = document.createElement('div');
		composer.classList.add('composer');

		Object.entries(attributes).forEach(([key, attribute]) => {
			composer.setAttribute(key, attribute);
		});

		document.body.appendChild(composer);
		return composer;
	}
}

export default HDesigner;
