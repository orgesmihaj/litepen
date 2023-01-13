import IEditorUI from '@contracts/ui/editorUI';
import { TSettings } from 'types/settings';
import Settings from '@/settings';

import '@assets/sass/objects/editor.scss';

class EditorUI implements IEditorUI {
	private readonly element: TSettings['holder'];

	constructor() {
		this.element = Settings.get('holder');
	}

	/**
	 * Attach a class-based identifier to the element
	 * in order to select it on a later time.
	 */
	identifyAs(identifier: string = ''): this {
		this.element.setAttribute(`data-${identifier}`, identifier);
		return this;
	}

	/**
	 * Set the placeholder for the element.
	 */
	placeholder(status: boolean = true): this {
		if (!status) {
			this.element.removeAttribute('placeholder');
			return this;
		}

		const placeholder =
			Settings?.get('holder')?.getAttribute('placeholder') ||
			Settings?.get('placeholder') ||
			'';

		this.element?.setAttribute('placeholder', placeholder);
		return this;
	}

	/**
	 * Make the element editable by the user.
	 *
	 * @param  {boolean} status - Define whether the element is editable or not.
	 * @returns this
	 */
	editable(status: boolean = true): this {
		this.element?.setAttribute('contenteditable', status.toString());
		return this;
	}

	/**
	 * Return the element specified in the settings.
	 */
	paint(): Element {
		return this.element;
	}
}

export default EditorUI;
