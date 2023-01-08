import TSettings from 'types/settings';

class Settings {
	private static settings: TSettings = Object.seal({
		autofocus: true,
		content: {},
		debounce: 330,
		editable: true,
		extensions: [],
		holder: null,
		placeholder: '',
	});

	private static instance: Settings;

	private constructor(settings: TSettings) {
		if (settings === undefined) {
			return;
		}
		Settings.overriddenBy(settings);
	}

	/**
	 * Create a new instance of the Settings class
	 * or return the existing one. This is a singleton.
	 */
	static use(settings: TSettings): Settings {
		if (!Settings.instance) {
			Settings.instance = new Settings(settings);
		}
		return Settings.instance;
	}

	/**
	 * Get a list of all the configuration items.
	 */
	static all(): TSettings {
		return Settings.settings;
	}

	/**
	 * Get the value of a specific setting.
	 */
	static get<Key extends keyof TSettings>(key: Key): TSettings[Key] {
		return Settings.settings[key];
	}

	/**
	 * Set a given configuration value.
	 */
	static set<Key extends keyof TSettings>(
		key: Key,
		value: TSettings[Key]
	): void {
		if (value === undefined) {
			return;
		}
		Settings.settings[key] = value;
	}

	/**
	 * Override the default settings by the given ones.
	 */
	static overriddenBy(settings: TSettings): TSettings {
		(Object.keys(settings) as Array<keyof TSettings>).map(key =>
			Settings.set(key, settings[key])
		);
		return Settings.all();
	}
}

export default Settings;
