import type { IContent } from 'contracts/outline/content';
import type { IState } from 'contracts/state/state';

import type { TSettings } from 'types/settings';

export interface IEditor {
	/**
	 * Write the state content to the editor.
	 */
	compose(state: IState): this;
	
	/**
	 * Make the editor editable or not.
	 */
	editable(status: TSettings['editable']): this;

	/**
	 * Check if the editor is editable.
	 */
	isEditable(): TSettings['editable'];

	/**
	 * Get the placeholder of the editor.
	 */
	placeholder(): TSettings['placeholder'];
	
	/**
	 * Set the placeholder of the editor.
	 */
	setPlaceholder(content: TSettings['placeholder']): this;

	/**
	 * Write content to the editor.
	 */
	insert(content: IContent): this;
}


