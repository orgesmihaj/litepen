import IEditorUI from '@contracts/editorUI';
import { TMutationCallback } from 'types/mutation';

interface IMutation {
	/**
	 * Define the element to be observed.
	 */
	on(element: IEditorUI): this;

	/**
	 * Capture any change in the editor's content.
	 */
	capture(callback: TMutationCallback): void;
}

export default IMutation;
