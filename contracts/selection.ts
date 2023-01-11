import { TSelection } from 'types/selection';

interface ISelection {
	/**
	 * Find the position inside the editor's content.
	 * */
	caret(): number;

	/**
	 * Move the caret to the specified position.
	 */
	moveCaretTo(position: number): void;

	/**
	 * Shift caret to the right/left by the given
	 * number of characters.
	 */
	shiftCaretBy(position: number): void;

	/**
	 * Find the current selection in the editor's content.
	 * */
	selection(): TSelection;

	/**
	 * Select the given range of content.
	 * */
	select(selection: TSelection): void;

	/**
	 * Clear the current selection.
	 * */
	clearSelection(): void;
}

export default ISelection;
