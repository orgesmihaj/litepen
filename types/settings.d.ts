import type { TState } from './state';

export type TSettings = {
	/**
	 * Set focus to the editor when the editor loads.
	 */
	autofocus?: boolean;

	/**
	 * The content written in the editor.
	 */
	content?: Object | HTMLElement;

	/**
	 * Delay processing user input by this amount in milliseconds
	 * to improve performance.
	 */
	debounce?: number;

	/**
	 * Enable or disable user editing of the editor content.
	 */
	editable?: boolean;

	/**
	 * Add custom functionality to the editor through extensions.
	 */
	extensions?: Array<any>;

	/**
	 * Specify how the editor should interpret the content,
	 * like HTML or JSON.
	 */
	format?: 'html' | 'json';

	/**
	 * Connect the editor to a specific HTML element where it
	 * will be displayed.
	 */
	holder: Element;

	/**
	 * Run a function whenever the editor's internal state changes.
	 */
	onUpdate?: (state: TState) => void;

	/**
	 * Display a placeholder text when the editor is empty.
	 */
	placeholder?: string;
};
