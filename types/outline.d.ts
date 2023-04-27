import IAccessibility from '@contracts/ui/accessibility';
import ICatalogue from '@contracts/outline/catalogue';
import IDesigner from '@contracts/ui/designer';
import IKeyboard from '@contracts/ui/keyboard';
import IMutation from '@contracts/ui/mutation';

/**
 * The dependencies of the `Outline` instance.
 */
export type TBlueprint = {
	/**
	 * Make DOM elements accessible to screen readers.
	 */
	accessibility: IAccessibility;

	/**
	 * Define content that can be part of the editor's
	 * outline.
	 */
	catalogue: ICatalogue;

	/**
	 * Modify the DOM of the editor.
	 */
	designer: IDesigner;

	/**
	 * Handle keyboard-related events.
	 * */
	keyboard: IKeyboard;

	/**
	 * Detect changes to the content.
	 */
	mutation: IMutation;
};
