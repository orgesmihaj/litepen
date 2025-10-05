import type { IEditor } from 'contracts/editor';
import type { ICatalogue } from 'contracts/outline/catalogue';
import type { IContent } from 'contracts/outline/content';
import type { IState } from 'contracts/state/state';

import type { TBlueprint } from 'types/editor';
import type { TSettings } from 'types/settings';

import Settings from './settings';

/**
 * 🌈
 */
// import 'styles/composer.css';

class Editor implements IEditor {
	private readonly editor: Readonly<Element> = Settings.get('holder');
	private readonly catalogue: ICatalogue

	constructor(blueprint: TBlueprint) {
		this.catalogue = blueprint.catalogue;
	}

	compose(state: IState): this {
		const paragraph: IContent = this.catalogue.pick('paragraph');

		state.write(paragraph);

		this.insert(paragraph);
		
		return this;
	}

	/**
	 * Make the editor editable or not.
	 */
	editable(isEditable: TSettings['editable']): this {
		this.editor.setAttribute('contenteditable', isEditable.toString());

		return this;
	}

	/**
	 * Check if the editor is editable.
	 */
	isEditable(): TSettings['editable'] {
		return this.editor.getAttribute('contenteditable') === 'true';
	}

	/**
	 * Set the placeholder of the editor.
	 */
	setPlaceholder(content: TSettings['placeholder']): this {
		this.editor.setAttribute('placeholder', content);

		return this;
	}

	/**
	 * Get the placeholder of the editor.
	 */
	placeholder(): TSettings['placeholder'] {
		return this.editor.getAttribute('placeholder') ?? '';
	}

	/**
	 * Insert content to the editor.
	 */
	insert(content: IContent): this {
		this.editor.appendChild(content.element());

		return this;
	}
}

export default Editor;
