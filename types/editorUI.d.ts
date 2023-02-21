import IKeyboard from '@contracts/keyboard';
import IAccessibility from '@contracts/accessibility';

/**
 * Dependencies of the `EditorUI` instance. .
 */
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

/**
 * The type of the attributes of the composer.
 *
 * @note: This type is used in the dummyComposer() method
 * 				for testing purposes.
 * */
export type TComposerAttributes =
	| {
			[key: string]: string;
	  }
	| [];
