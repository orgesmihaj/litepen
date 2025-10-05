import type { TListenerCallback } from 'types/listeners';

/**
 * Handle keyboard-related events.
 */
export interface IKeyboard {
	/**
	 * Run a callback when the defined key is pressed.
	 */
	whenPressing(key: string, callback: TListenerCallback): void;
}


