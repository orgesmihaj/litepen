import { expect, describe, it } from 'vitest';
import Settings from '../src/settings/settings';
import TSettings from '../src/types/settings';

describe('Settings object', () => {
	document.body.innerHTML = `<div class="composer"></div>`;
	const holder = document.querySelector('.composer');

	const defaults: TSettings = {
		autofocus: true,
		content: {},
		debounce: 330,
		editable: true,
		extensions: [],
		placeholder: '',
		holder,
	};

	it('can retrieve a list of all of the default settings.', () => {
		const settings = new Settings({ holder });

		expect(settings.all()).toMatchObject(defaults);
	});

	it('can retrieve each of the default settings.', () => {
		const settings = new Settings({ holder });

		expect(settings.get('autofocus')).toBe(defaults.autofocus);
		expect(settings.get('extensions')).toEqual(defaults.extensions);
		expect(settings.get('holder')).toBe(defaults.holder);
		expect(settings.get('debounce')).toBe(defaults.debounce);
		expect(settings.get('editable')).toBe(defaults.editable);
		expect(settings.get('placeholder')).toBe(defaults.placeholder);
		expect(settings.get('content')).toEqual(defaults.content);
	});

	it('will change the value of an existing setting.', () => {
		const settings = new Settings({ holder });

		settings.set('autofocus', false);

		expect(settings.get('autofocus')).toBe(false);
	});

	it('will not update a setting if the new value is undefined.', () => {
		const settings = new Settings({ holder });
		const existingValue = settings.get('autofocus');

		settings.set('autofocus', undefined);

		expect(settings.get('autofocus')).toBe(existingValue);
	});

	it('will override the pre-defined settings in bulk and return them.', () => {
		const settings = new Settings({ holder });

		const alternations: TSettings = {
			autofocus: false,
			debounce: 100,
			editable: false,
			holder,
		};

		expect(settings.overriddenBy(alternations)).toMatchObject({
			...defaults,
			...alternations,
		});
	});

	it('will override settings coming from object initialization.', () => {
		const alternations: TSettings = {
			autofocus: false,
			debounce: 100,
			editable: false,
			holder,
		};

		const settings = new Settings(alternations);

		expect(settings.all()).toMatchObject({
			...defaults,
			...alternations,
		});
	});
});
