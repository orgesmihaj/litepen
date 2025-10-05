
export type TSettings = {
	/**
	 * Automatically focus the editor once it's initialized, allowing
	 * the user to start typing immediately without additional clicks.
	 */
	autofocus: boolean;

	/**
	 * The initial content to display in the editor. This can be provided
	 * as a structured object (e.g. JSON) or a pre-constructed DOM element (HTML).
	 */
	content: Object | HTMLElement;

	/**
	 * Introduce a delay (in milliseconds) before processing user input,
	 * helping to optimize performance for large documents or slower devices.
	 */
	debounce: number;

	/**
	 * Determine whether the editor's contents can be edited by the user.
	 */
	editable: boolean;

	/**
	 * Extend the editor's functionality with custom modules.
	 */
	extensions: Array<any>;

	/**
	 * Specify how the editor should interpret the content.
	 */
	format: 'html' | 'json';

	/**
	 * Associate the editor to a specific HTML element in which it will render
	 * 	 * and function. This is the root container for the editor's UI.
	 */
	holder: Element;

	/**
	 * Specify a callback function to be executed whenever the
	 * editor’s internal state.
	 */
	onUpdate: () => void;

	/**
	 * Provide placeholder text displayed when the editor is empty.
	 */
	placeholder: string;
};
