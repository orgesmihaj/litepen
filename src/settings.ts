import ISettings from '@contracts/settings';
import TSettings from 'types/settings';

class Settings implements ISettings {
	private settings: TSettings = Object.seal({
		autofocus: true,
		content: {},
		debounce: 330,
		editable: true,
		extensions: [],
		holder: null,
		placeholder: '',
	});

	constructor(settings: TSettings) {
		if (settings === undefined) {
			return;
		}
		this.overriddenBy(settings);
	}

	/**
	 * Get a list of all the configuration items.
	 */
	public all(): TSettings {
		return this.settings;
	}

	/**
	 * Get the value of a specific setting.
	 */
	public get<Key extends keyof TSettings>(key: Key): TSettings[Key] {
		return this.settings[key];
	}

	/**
	 * Set a given configuration value.
	 */
	public set<Key extends keyof TSettings>(
		key: Key,
		value: TSettings[Key]
	): void {
		if (value === undefined) {
			return;
		}
		this.settings[key] = value;
	}

	/**
	 * Override the default settings by the given ones.
	 */
	overriddenBy(settings: TSettings): TSettings {
		(Object.keys(settings) as Array<keyof TSettings>).map(key =>
			this.set(key, settings[key])
		);
		return this.settings;
	}
}

export default Settings;
