export type TSettings = {
	/**
	 * Set a Caret to the Editor after initialization.
	 */
	autofocus?: boolean;

	/**
	 * Editor's content as an object or DOM element.
	 */
	content?: Object | HTMLElement;

	/**
	 * The time needed by the editor to wait for the user to stop typing.
	 */
	debounce?: number;

	/**
	 * Enable or disable the editor.
	 */
	editable?: boolean;

	/**
	 * Activate new functionalities or behaviors to the Editor.
	 */
	extensions?: Array<any>;

	/**
	 * Bind the Editor to a specific HTML element or selector.
	 */
	holder: Element;

	/*
	 * Set a placeholder to the Editor.
	 */
	placeholder?: string;
};
