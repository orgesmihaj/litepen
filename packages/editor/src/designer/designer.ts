import Settings from '@/settings';
import type {
	IAccessibility
} from 'contracts/designer/accessibility';
import type { IDesigner } from 'contracts/designer/designer';
import type { IMutation } from 'contracts/designer/mutation';
import type { IContent } from 'contracts/outline/content';
import Messages from 'logger/messages';
import type { TContent } from 'types/content';
import type { TBlueprint } from 'types/designer/designer';
import type { TMutationCallback } from 'types/designer/mutation';

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
	private element: Element | HTMLElement = Settings.get('holder');

	/**
	 * Detect changes made to the element.
	 */
	private readonly mutation: IMutation;

	constructor(blueprint: TBlueprint) {
		this.accessibility = blueprint.accessibility;
		this.mutation = blueprint.mutation;
	}

	/**
	 * Create a DOM element to represent the content.
	 */
	create(content: IContent): HTMLElement {
		const element: HTMLElement = content.element();

		if (!this.accessibility.hasSemanticMeaning(element)) {
			throw new Error(Messages.NO_SEMANTIC_MEANING);
		}

		if (content.trailingElement !== undefined) {
			element.appendChild(content.trailingElement());
		}

		this.element.appendChild(element);

		return element;
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
		return this.element.hasAttribute('placeholder');
	}

	/**
	 * Attach a `data-*` attribute to the element.
	 */
	identifyAs(name: string): this {
		this.element.setAttribute('data-editor', name);

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
	 * Capture any change in the editor's content.
	 */
	onChange(callback: TMutationCallback): this {
		this.mutation.on(this.element).capture((mutations: TContent): void => {
			callback(mutations);
		});

		return this;
	}

	/**
	 * Set the placeholder for the element.
	 */
	placeholder(message: string): this {
		this.element.setAttribute('placeholder', message);

		return this;
	}
}

export default Designer;
