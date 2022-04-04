import { Settings } from '../configs/editor.settings';
import errors from '../languages/errors';

class Element {
	private element: HTMLElement | null;
	private configuration: Settings;

	constructor(configurations: Settings) {
		this.element = configurations?.holder;
		this.configuration = configurations;
	}

	/**
	 * @param  {string} identifier
	 * @returns Element
	 */
	name(identifier: string = ''): Element {
		if (this.element === null) {
			throw new Error(errors.isNull);
		}
		if (!this.element?.classList.contains(identifier)) {
			this.element.classList.add(identifier);
		}
		return this;
	}

	hasPlaceholder(): Element {
		if (this.element === null) {
			throw new Error('Element is not defined');
		}
		const placeholder =
			this.element?.getAttribute('placeholder') ||
			this.configuration?.placeholder ||
			'';

		this.element?.setAttribute('placeholder', placeholder);
		return this;
	}

	/**
	 * @returns HTMLElement
	 */
	isEditable(): Element {
		if (this.element === null) {
			throw new Error(errors.isNull);
		}
		this.element?.setAttribute('contenteditable', 'true');
		return this;
	}

	/**
	 * @returns HTMLElement
	 */
	paint(): HTMLElement {
		if (this.element === null) {
			throw new Error(errors.isNull);
		}
		return this.element;
	}
}

export default Element;
