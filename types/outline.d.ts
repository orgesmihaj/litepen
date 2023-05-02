import IAccessibility from '@contracts/designer/accessibility';
import ICatalogue from '@contracts/outline/catalogue';
import IDesigner from '@contracts/designer/designer';
import IKeyboard from '@contracts/designer/keyboard';
import IMutation from '@contracts/designer/mutation';

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
