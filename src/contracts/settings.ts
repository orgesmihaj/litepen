import TSettings from "types/settings";

interface ISettings {
	/**
	 * Get a list of all the configuration items.
	 */
	all(): TSettings;

	/**
	 * Get the value of a specific setting.
	 */
	get<Key extends keyof TSettings>(key: Key): TSettings[Key];

	/**
	 * Override the default settings by the given ones.
	 */
	overriddenBy(settings: TSettings): TSettings;

	/**
	 * Set a given configuration value.
	 */
	set<Key extends keyof TSettings>(key: Key, value: TSettings[Key]): void;
}

export default ISettings;
