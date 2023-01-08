import { expect, describe, it } from 'vitest';
import TSettings from 'types/settings';
import Settings from '../src/settings';

describe('Settings object', () => {
	document.body.innerHTML = `<div class="composer"></div>`;
	const holder = document.querySelector('.composer');

	const settings: TSettings = {
		autofocus: true,
		content: {},
		debounce: 330,
		editable: true,
		extensions: [],
		placeholder: '',
		holder,
	};

	Settings.use({
		autofocus: true,
		content: {},
		debounce: 330,
		editable: true,
		extensions: [],
		placeholder: '',
		holder,
	});

	it('can retrieve a list of all of the default settings.', () => {
		expect(Settings.all()).toMatchObject(settings);
	});

	it('can retrieve each of the default settings.', () => {
		expect(Settings.get('autofocus')).toBe(settings.autofocus);
		expect(Settings.get('extensions')).toEqual(settings.extensions);
		expect(Settings.get('holder')).toBe(settings.holder);
		expect(Settings.get('debounce')).toBe(settings.debounce);
		expect(Settings.get('editable')).toBe(settings.editable);
		expect(Settings.get('placeholder')).toBe(settings.placeholder);
		expect(Settings.get('content')).toEqual(settings.content);
	});

	it('will change the value of an existing setting.', () => {
		Settings.set('autofocus', false);

		expect(Settings.get('autofocus')).toBe(false);
	});

	it('will not update a setting if the new value is undefined.', () => {
		const existingSetting = Settings.get('autofocus');

		Settings.set('autofocus', undefined);

		expect(Settings.get('autofocus')).toBe(existingSetting);
	});

	it('will override the pre-defined settings in bulk and return them.', () => {
		const alternations: TSettings = {
			autofocus: false,
			debounce: 100,
			editable: false,
			holder,
		};

		expect(Settings.overriddenBy(alternations)).toMatchObject({
			...settings,
			...alternations,
		});
	});
});
