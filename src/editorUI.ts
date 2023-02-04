import IEditorUI from '@contracts/editorUI';
import IAccessibility from '@contracts/accessibility';
import { TBlueprint } from 'types/editorUI';
import Settings from '@/settings';

import '@assets/sass/objects/editor.scss';

/**
 * Modify the DOM of the editor.
 */
class EditorUI implements IEditorUI {
	private readonly element = Settings.get('holder');

	/**
	 * Make DOM elements accessible to screen readers.
	 */
	private readonly accessibility: IAccessibility;

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
	 */
	editable(status: boolean = true): this {
		this.element?.setAttribute('contenteditable', status.toString());
		return this;
	}

	/**
	 * Return the element specified in the settings.
	 */
	paint(): Element {
		this.accessibility.paragraphSeparator(document.createElement('p'));

		return this.element;
	}
}

export default EditorUI;
