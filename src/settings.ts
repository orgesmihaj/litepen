import type { TSettings } from 'types/settings';

/**
 * 🛠Manage the configuration settings of the editor.
 */
class Settings {
	/**
	 * A singleton instance of the Settings class.
	 */
	private static instance: Settings;

	/**
	 * The default settings of the editor.
	 */
	private static settings: TSettings = Object.seal({
		autofocus: true,
		content: {},
		debounce: 330,
		editable: true,
		extensions: [],
		format: 'json',
		holder: document.createElement('div'),
		onUpdate: () => {},
		placeholder: 'Write something down...',
	});

	private constructor(settings: TSettings) {
		Settings.settings = settings;
	}

	/**
	 * Return a shallow copy of the current settings.
	 */
	static all(): Readonly<TSettings> {
		return { ...Settings.settings };
	}

	/**
	 * Get the value of a specific setting.
	 */
	static get<Setting extends keyof TSettings>(
		setting: Setting,
	): Readonly<TSettings[Setting]> {
		return Settings.settings[setting];
	}

	/**
	 * Set a given configuration setting value.
	 */
	static set<Setting extends keyof TSettings>(
		setting: Setting,
		value: TSettings[Setting],
	): void {
		Settings.settings[setting] = value;
	}

	/**
	 * Create a singleton instance of the Settings class,
	 * ensuring only one instance exists. If no settings are provided,
	 * it uses the default settings.
	 */
	static use(settings?: TSettings): Settings {
		if (!Settings.instance) {
			Settings.instance = new Settings({ ...Settings.settings, ...settings });
		}
		return Settings.instance;
	}
}

export default Settings;
