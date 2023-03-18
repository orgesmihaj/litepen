import IDesigner from '@contracts/ui/designer';
import Settings from '@/settings';

/**
 * Modify the DOM of an element.
 */
class Designer implements IDesigner {
	/**
	 * The DOM element to modify.
	 */
	private element: Element = Settings.get('holder');

	/**
	 * Make the element editable or not.
	 */
	editable(status: boolean | undefined = true): this {
		this.element.setAttribute('contenteditable', status.toString());

		return this;
	}

	/**
	 * Check if the element has a placeholder.
	 */
	hasPlaceholder(): boolean {
		return this.element.hasAttribute('data-placeholder');
	}

	/**
	 * Attach a `data-*` attribute to the element.
	 */
	identifyAs(name: string): this {
		this.element.setAttribute(`data-${name}`, name);

		return this;
	}

	/**
	 * Check if the element is editable.
	 */
	isEditable(): boolean {
		return this.element.getAttribute('contenteditable') === 'true';
	}

	/**
	 * Assign the element to the designer.
	 */
	on(element: Element): this {
		this.element = element;

		return this;
	}

	/**
	 * Set the placeholder for the element.
	 */
	placeholder(message: string | false | undefined): this {
		if (!message) {
			this.element.removeAttribute('data-placeholder');
			return this;
		}
		this.element.setAttribute('data-placeholder', message);
		return this;
	}
}

export default Designer;
