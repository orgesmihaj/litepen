import IEditorUI from '@contracts/ui/editorUI';
import { TMutationCallback } from '../../types/mutation';

interface IMutationUI {
	/**
	 * Define the element to be observed.
	 *
	 * @param element IEditorUI
	 * @returns this
	 */
	on(element: IEditorUI): this;

	/**
	 * Capture any change in the element content.
	 *
	 * @returns void
	 */
	capture(callback: TMutationCallback): void;
}

export default IMutationUI;
