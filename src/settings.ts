import type { TSettings } from 'types/settings';

/**
 * # 🛠 Manage the configuration settings of the editor.
 *
 * This class implements a `Singleton` pattern to centralize and manage
 * the configuration settings for the editor. It ensures consistent
 * settings throughout the application and provides methods for:
 *
 * Usage:
 * - Access the singleton instance via `Settings.use()` method.
 * - Update or retrieve specific settings as needed.
 *
 * Example:
 * ```ts
 * const settings = Settings.use({ editable: false });
 * const placeholder = Settings.get('placeholder');
 * Settings.set('debounce', 500);
 * ```
 */
class Settings {

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
		Settings.settings = {...Settings.settings, ...settings};
	}

	/**
	 * Return a shallow copy of the current settings.
	 */
	static all(): Readonly<TSettings> {
		return Object.freeze({ ...Settings.settings });
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
	 * Create a singleton instance of the `Settings` class,
	 * ensuring only one instance exists. If no settings are provided,
	 * it uses the default settings.
	 */
	static use(settings?: Partial<TSettings>): Settings {
		if (!Settings.instance) {
			Settings.instance = new Settings({...Settings.settings, ...settings });

			Object.freeze(Settings.instance);
		}
		return Settings.instance;
	}
}

export default Settings;
