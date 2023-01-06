import IMutation from '@contracts/mutation';
import IEditorUI from '@contracts/ui/editorUI';
import { TMutationCallback } from 'types/mutation';

class Mutation implements IMutation {
	private element!: IEditorUI;

	private configs = {
		childList: true,
		attributes: true,
		subtree: true,
		characterData: true,
	};

	/**
	 * Define the element to be observed.
	 */
	on(element: IEditorUI): this {
		this.element = element;
		return this;
	}

	/**
	 * Capture any change in the element content.
	 */
	capture(callback: TMutationCallback): void {
		if (!this.element) {
			return;
		}
		const observer = new MutationObserver((records: MutationRecord[]) => {
			records.forEach(record => callback(record));
		});

		observer.observe(this.element.paint(), this.configs);
	}
}

export default Mutation;
