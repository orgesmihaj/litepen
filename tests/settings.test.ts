import { describe, it, expect } from 'vitest';
import { TSettings } from 'types/settings';
import Settings from '@/settings';

/**
 * 🔎Editor's Settings instance:
 *
 * - must have a default settings
 */
describe("Editor's settings instance", () => {
	/**
	 * Default settings.
	 */
	const settings: TSettings = Object.seal({
		autofocus: true,
		content: {},
		debounce: 330,
		editable: true,
		extensions: [],
		holder: document.createElement('div'),
		placeholder: '',
	});

	/**
	 * Make sure that the settings object has the default
	 * values.
	 */
	it('must have a default settings.', () => {
		expect(Settings.all()).toEqual(settings);
	});

	/**
	 * Get a specific setting and make sure it has the
	 * right value.
	 */
	it('can retrieve a specific setting.', () => {
		expect(Settings.get('autofocus')).toBe(settings.autofocus);
	});

	/**
	 * Update an existing setting and make sure it has
	 * the updated value.
	 */
	it('can update an existing setting.', () => {
		Settings.set('autofocus', false);
		expect(Settings.get('autofocus')).toBe(false);
	});

	/**
	 * Update multiple settings at once and make sure
	 * the updated values are correct.
	 */
	it('can update multiple settings at once.', () => {
		Settings.overriddenBy({
			autofocus: true,
			editable: false,
			holder: document.createElement('p'),
		});

		expect(Settings.get('autofocus')).toBe(true);
		expect(Settings.get('editable')).toBe(false);
		expect(Settings.get('holder')).toBeInstanceOf(HTMLParagraphElement);
	});

	/**
	 * Create a new instance of the Settings class or
	 * return the existing one.
	 */
	it('can create a singleton instance.', () => {
		const singleton = Settings.use(settings);
		expect(Settings.use(settings)).toBe(singleton);
	});
});
