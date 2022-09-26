import IMutationUI from '@contracts/ui/mutationUI';
import IEditorUI from '@contracts/ui/editorUI';
import { TMutationCallback } from '../types/mutation';

class MutationUI implements IMutationUI {
	private element!: IEditorUI;

	private configs = {
		childList: true,
		attributes: true,
		subtree: true,
		characterData: true,
	};

	/**
	 * Define the element to be observed.
	 *
	 * @param element IEditorUI
	 * @returns this
	 */
	on(element: IEditorUI): this {
		this.element = element;
		return this;
	}

	/**
	 * Capture any change in the element content.
	 *
	 * @returns void
	 */
	capture(callback: TMutationCallback): void {
		if (!this.element) {
			return;
		}
		const observer = new MutationObserver(
			(mutationRecords: MutationRecord[]) => {
				mutationRecords.forEach(record => callback(record));
			}
		);

		observer.observe(this.element.paint(), this.configs);
	}
}

export default MutationUI;
