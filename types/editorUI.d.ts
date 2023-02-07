import IKeyboard from '@contracts/keyboard';
import IAccessibility from '@contracts/accessibility';

export type TBlueprint = {
	/**
	 * Make DOM elements accessible to screen readers.
	 * */
	accessibility: IAccessibility;

	/**
	 * Handle keyboard-related events.
	 * */
	keyboard: IKeyboard;
};
