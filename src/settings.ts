import { TSettings } from 'types/settings';
import Messages from '@logger/messages';

/**
 * Manage the settings of the editor.
 */
class Settings {
	private static settings: TSettings = Object.seal({
		autofocus: true,
		content: {},
		debounce: 330,
		editable: true,
		extensions: [],
		holder: document.createElement('div'),
		placeholder: '',
	});

	private static instance: Settings;

	private constructor(settings: TSettings) {
		if (settings?.holder === null) {
			throw new Error(Messages.HOLDER_IS_MISSING);
		}
		Settings.overriddenBy(settings);
	}

	/**
	 * Create a new instance of the Settings class
	 * or return the existing one. This is a singleton.
	 */
	static use(settings: TSettings): Settings {
		if (!Settings.instance) {
			Settings.instance = new Settings(settings ?? this.settings);
		}
		return Settings.instance;
	}

	/**
	 * Get a list of all the settings.
	 */
	static all(): TSettings {
		return Settings.settings;
	}

	/**
	 * Get the value of a specific setting.
	 */
	static get<Setting extends keyof TSettings>(
		setting: Setting
	): TSettings[Setting] {
		return Settings.settings[setting];
	}

	/**
	 * Set a given configuration value.
	 */
	static set<Setting extends keyof TSettings>(
		setting: Setting,
		value: TSettings[Setting]
	): void {
		if (value === undefined) {
			return;
		}
		Settings.settings[setting] = value;
	}

	/**
	 * Override the default settings by the given ones.
	 */
	static overriddenBy(settings: TSettings): TSettings {
		(Object.keys(settings) as Array<keyof TSettings>).map(setting =>
			Settings.set(setting, settings[setting])
		);
		return Settings.all();
	}
}

export default Settings;
