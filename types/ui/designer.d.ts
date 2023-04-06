import IAccessibility from '@contracts/ui/accessibility';
import IKeyboard from '@contracts/ui/keyboard';
import ISelection from '@contracts/ui/selection';

/**
 * The dependencies of the designer.
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

	/**
	 * Manage the selection of the editor's content.
	 */
	selection: ISelection;
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
