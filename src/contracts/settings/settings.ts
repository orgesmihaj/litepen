import TSettings from '../../types/settings';

interface ISettings {
	/**
	 * Get a list of all of the configuration items.
	 *
	 * @return {TSettings}
	 */
	all(): TSettings;

	/**
	 * Get a the value of a specific setting.
	 *
	 * @param  {Key} key
	 * @returns TSettings
	 */
	get<Key extends keyof TSettings>(key: Key): TSettings[Key];

	/**
	 * Override the default settings by the given ones.
	 *
	 * @param  {TSettings} settings
	 * @returns TSettings
	 */
	overriddenBy(settings: object): object;

	/**
	 * Set a given configuration value.
	 *
	 * @param  {Key} key
	 * @param  {TSettings[Key]} value
	 * @returns void
	 */
	set<Key extends keyof TSettings>(key: Key, value: TSettings[Key]): void;
}

export default ISettings;
