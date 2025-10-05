import type { IKeyboard } from 'contracts/designer/keyboard';
import type { IListeners } from 'contracts/listeners';
import type { TBlueprint } from 'types/designer/keyboard';
import type { TListenerCallback } from 'types/listeners';

/**
 * Handle keyboard-related events.
 * */
class Keyboard implements IKeyboard {
	
	private listeners: IListeners;

	constructor(blueprint: TBlueprint) {
		this.listeners = blueprint.listeners;
	}

	/**
	 * Run a callback when the defined key is pressed.
	 * */
	whenPressing(key: string, callback: TListenerCallback): void {
		this.listeners.subscribe('keydown', event => {
			if ((event as KeyboardEvent).key === key) {
				callback(event);
			}
		});
	}
}

export default Keyboard;
