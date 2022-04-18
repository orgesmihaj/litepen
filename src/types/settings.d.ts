type Settings = {
	/**
	 * Editor Autofocus Mode
	 * -> Set a Caret to the Editor after initialization.
	 */

	autofocus?: boolean;

	/**
	 * Editor Content
	 * -> Editor's content as an object or DOM element.
	 */

	content?: Object | HTMLElement;

	/**
	 * Editor Debounce
	 * -> The time needed by the editor to wait for the user to stop typing.
	 */

	debounce?: number;

	/**
	 * Editor Editable Mode
	 * -> Enable or disable the editor.
	 */

	editable?: boolean;

	/**
	 * Editor Extensions
	 * -> Activate new functionalities or behaviors to the Editor.
	 */

	extensions?: Array<any>;

	/**
	 * Editor Holder
	 * -> Bind the Editor to a specific element or selector.
	 */

	holder?: Element | null;

	/*
	 * Editor Placeholder
	 * -> Set a placeholder to the Editor.
	 */

	placeholder?: string;
};

export default Settings;
