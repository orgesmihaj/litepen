import ISettings from '@contracts/settings';
import IEditorUI from '@contracts/ui/editorUI';

class EditorUI implements IEditorUI {
	private element: Element | null;

	private settings: ISettings;

	constructor(settings: ISettings) {
		this.element = settings.get('holder');
		this.settings = settings;
	}

	/**
	 * Attach a class-based identifier to the element
	 * in order to select it on a later time.
	 *
	 * @param  {string} identifier
	 * @returns Element
	 */
	identifyAs(identifier: string = ''): this {
		if (!this.element) {
			throw new Error(
				'The holder is missing. Please, checkout whether a DOM Element is properly selected.'
			);
		}
		this.element.setAttribute(`data-${identifier}`, identifier);
		return this;
	}

	/**
	 * Set the placeholder for the element.
	 *
	 * @param  {boolean} status - Define whether the placeholder will appear or not.
	 * @returns this
	 */
	placeholder(status: boolean = true): this {
		if (!this.element) {
			throw new Error(
				'The holder is missing. Please, checkout whether a DOM Element is properly selected.'
			);
		}
		if (!status) {
			this.element.removeAttribute('placeholder');
			return this;
		}

		const placeholder =
			this.settings?.get('holder')?.getAttribute('placeholder') ||
			this.settings?.get('placeholder') ||
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
		if (!this.element) {
			throw new Error(
				'The holder is missing. Please, checkout whether a DOM Element is properly selected.'
			);
		}
		this.element?.setAttribute('contenteditable', status.toString());
		return this;
	}

	/**
	 * Return the element specified in the settings.
	 *
	 * @returns Element
	 */
	paint(): Element {
		if (!this.element) {
			throw new Error(
				'The holder is missing. Please, checkout whether a DOM Element is properly selected.'
			);
		}
		return this.element;
	}
}

export default EditorUI;
