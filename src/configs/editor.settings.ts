export interface ISettings {
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

	holder: HTMLElement | null;

	/*
	 * Editor Placeholder
	 * -> Set a placeholder to the Editor.
	 */

	placeholder?: string;

	/*
	 * Editor Default Settings
	 * -> A list of default settings to be applied to the Editor.
	 */

	defaults?: ISettings;

	/*
	 * Editor settings' override method
	 * -> Override the default settings with the given ones.
	 */

	overriddenBy?(settings: ISettings): ISettings;
}

class Settings implements ISettings {
	readonly autofocus: boolean = false;

	readonly content: Object | HTMLElement = {};

	readonly debounce: number = 330;

	readonly editable: boolean = true;

	readonly extensions: Array<any> = [];

	readonly holder: HTMLElement | null = null;

	readonly placeholder: string = '';

	readonly defaults: ISettings = {
		autofocus: this.autofocus,
		content: this.content,
		debounce: this.debounce,
		editable: this.editable,
		extensions: this.extensions,
		holder: this.holder,
		placeholder: this.placeholder,
	};

	overriddenBy(settings: ISettings): ISettings {
		return { ...this.defaults, ...settings };
	}
}

export default Settings;
