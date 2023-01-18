import { TListenerCallback } from 'types/listeners';

interface IKeyboard {
	/**
	 * Run a callback when the defined key is pressed.
	 * */
	whenPressing(key: string, callback: TListenerCallback): void;
}

export default IKeyboard;
