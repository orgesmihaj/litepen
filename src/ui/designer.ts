import IAccessibility from "@contracts/ui/accessibility";
import IContent from "@contracts/outline/content";
import IDesigner from "@contracts/ui/designer";
import IMutation from "@contracts/ui/mutation";
import { TBlueprint } from "types/ui/designer";
import Messages from "@logger/messages";
import { TMutationCallback } from "types/ui/mutation";
import Settings from "@/settings";

/**
 * Modify the DOM of an element.
 */
class Designer implements IDesigner {
	/**
	 * Make DOM elements accessible to screen readers.
	 */
	private readonly accessibility: IAccessibility;

	/**
	 * The DOM element to modify.
	 */
	private element: Element = Settings.get('holder');

	/**
	 * Detect changes made to the element.
	 */
	private readonly mutation: IMutation;

	constructor(blueprint: TBlueprint) {
		this.accessibility = blueprint.accessibility;
		this.mutation = blueprint.mutation;
	}

	/**
	 * Add content as part of the Editor's DOM.
	 */
	add(content: IContent): this {
		const element: HTMLElement = content.element();

		if (!this.accessibility.hasSemanticMeaning(element)) {
			throw new Error(Messages.NO_SEMANTIC_MEANING);
		}

		if (content.trailingElement !== undefined) {
			element.appendChild(content.trailingElement());
		}

		this.element.appendChild(element);

		return this;
	}

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

	/**
	 * Capture any change in the editor's content.
	 */
	whenMutations(callback: TMutationCallback): this {
		if (!this.element) {
			throw new Error(Messages.NO_ELEMENT_TO_OBSERVE);
		}
		this.mutation.on(this.element).capture(mutations => {
			callback(mutations);
		});
		return this;
	}
}

export default Designer;
