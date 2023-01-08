import IMutation from '@contracts/mutation';
import IEditorUI from '@contracts/ui/editorUI';
import { TMutationCallback } from 'types/mutation';
import Settings from './settings';

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
		const observer = new MutationObserver(
			this.debounce(callback, Settings.get('debounce'))
		);

		observer.observe(this.element.paint(), this.configs);
	}

	/**
	 * Wait until a certain amount of time has passed
	 * before triggering the callback.
	 * */
	debounce(
		callback: TMutationCallback,
		pause: number = 330
	): TMutationCallback {
		let timeout: ReturnType<typeof setTimeout>;

		return (records: MutationRecord[]): void => {
			clearTimeout(timeout);

			timeout = setTimeout(() => callback(records), pause);
		};
	}
}

export default Mutation;
