import { expect, describe, it } from 'vitest';
import Settings from '../src/settings/settings';
import TSettings from '../src/types/settings';

describe('Settings object', () => {
	const defaults: TSettings = {
		autofocus: true,
		content: {},
		debounce: 330,
		editable: true,
		extensions: [],
		holder: null,
		placeholder: '',
	};

	it('can retrieve a list of all of the default settings.', () => {
		const settings = new Settings();

		expect(settings.all()).toMatchObject(defaults);
	});

	it('can retrieve each of the default settings.', () => {
		const settings = new Settings();

		expect(settings.get('autofocus')).toBe(defaults.autofocus);
		expect(settings.get('extensions')).toEqual(defaults.extensions);
		expect(settings.get('holder')).toBe(defaults.holder);
		expect(settings.get('debounce')).toBe(defaults.debounce);
		expect(settings.get('editable')).toBe(defaults.editable);
		expect(settings.get('placeholder')).toBe(defaults.placeholder);
		expect(settings.get('content')).toEqual(defaults.content);
	});

	it('will change the value of an existing setting.', () => {
		const settings = new Settings();

		settings.set('autofocus', false);

		expect(settings.get('autofocus')).toBe(false);
	});

	it('will not update a setting if the new value is undefined.', () => {
		const settings = new Settings();
		const existingValue = settings.get('autofocus');

		settings.set('autofocus', undefined);

		expect(settings.get('autofocus')).toBe(existingValue);
	});

	it('will override the pre-defined settings in bulk and return them.', () => {
		const settings = new Settings();

		const alternations: TSettings = {
			autofocus: false,
			debounce: 100,
			editable: false,
		};

		expect(settings.overriddenBy(alternations)).toMatchObject({
			...defaults,
			...alternations,
		});
	});
});
