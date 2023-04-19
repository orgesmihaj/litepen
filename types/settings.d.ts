import { TState } from "types/state";

export type TSettings = {
	/**
	 * Set the caret to the end of the editor's content.
	 */
	autofocus?: boolean;

	/**
	 * The content written in the editor.
	 */
	content?: Object | HTMLElement;

	/**
	 * The waiting time before the user's input is processed.
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

	/**
	 * Set a callback to be executed when the State is updated.
	 */
	onUpdate?: () => void;

	/*
	 * Set a placeholder to the Editor.
	 */
	placeholder?: string;
};
