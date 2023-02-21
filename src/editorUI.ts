import IAccessibility from '@contracts/accessibility';
import IContent from '@contracts/outline/content';
import IEditorUI from '@contracts/editorUI';
import { TBlueprint } from 'types/editorUI';
import Messages from '@logger/messages';
import Settings from '@/settings';

import '@assets/sass/objects/editor.scss';

/**
 * Modify the DOM of the editor.
 */
class EditorUI implements IEditorUI {
	/**
	 * Make DOM elements accessible to screen readers.
	 */
	private readonly accessibility: IAccessibility;

	/**
	 * The DOM element where the editor will be attached.
	 */
	readonly element: Element = Settings.get('holder');

	/**
	 * The singleton instance.
	 */
	private static instance: EditorUI;

	private constructor(blueprint: TBlueprint) {
		this.accessibility = blueprint.accessibility;
	}

	/**
	 * Control access to the singleton instance.
	 */
	static getInstance(blueprint: TBlueprint): EditorUI {
		if (!EditorUI.instance) {
			EditorUI.instance = new EditorUI(blueprint);
		}
		return EditorUI.instance;
	}

	/**
	 * Attach the element to the editor's DOM.
	 */
	attach(content: IContent): this {
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
	 * Build the editor's DOM.
	 */
	build(): void {
		this.identifyAs('editor').editable().placeholder();
	}

	/**
	 * Make the element editable by the user.
	 */
	editable(status: boolean = true): this {
		this.element?.setAttribute('contenteditable', status.toString());
		return this;
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
			this.element.removeAttribute('data-placeholder');
			return this;
		}

		const placeholder =
			Settings?.get('holder')?.getAttribute('data-placeholder') ||
			Settings?.get('placeholder') ||
			'';

		this.element?.setAttribute('data-placeholder', placeholder);
		return this;
	}
}

export default EditorUI;
