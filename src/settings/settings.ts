import ISettings from '../contracts/settings/settings';
import TSettings from '../types/settings';

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

	constructor(settings: TSettings = {}) {
		this.settings = Object.assign(this.settings, settings);
	}

	/**
	 * Get a list of all of the configuration items.
	 *
	 * @return array
	 */
	public all(): TSettings {
		return this.settings;
	}

	/**
	 * Get a the value of a specific setting.
	 *
	 * @param  {Key} key
	 * @returns TSettings
	 */
	public get<Key extends keyof TSettings>(key: Key): TSettings[Key] {
		return this.settings[key];
	}

	/**
	 * Set a given configuration value.
	 *
	 * @param  {Key} key
	 * @param  {TSettings[Key]} value
	 * @returns void
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
	 *
	 * @param  {TSettings} settings
	 * @returns TSettings
	 */
	overriddenBy(settings: TSettings): TSettings {
		(Object.keys(settings) as Array<keyof TSettings>).map(key =>
			this.set(key, settings[key])
		);
		return this.settings;
	}
}

export default Settings;
