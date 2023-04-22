import IAccessibility from '@contracts/ui/accessibility';
import ICaret from '@contracts/ui/caret';
import IKeyboard from '@contracts/ui/keyboard';
import IListeners from '@contracts/listeners';
import IMutation from '@contracts/ui/mutation';

/**
 * The dependencies of the `Designer` instance.
 */
export type TBlueprint = {
	/**
	 * Make DOM elements accessible to screen readers.
	 */
	accessibility: IAccessibility;

	/**
	 * Manage the caret position in the editor.
	 */
	caret: ICaret;

	/**
	 * Handle keyboard-related events.
	 */
	keyboard: IKeyboard;

	/**
	 * A subscription mechanism to the editor's events.
	 */
	listeners: IListeners;

	/**
	 * Detect changes made to the element.
	 */
	mutation: IMutation;
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
