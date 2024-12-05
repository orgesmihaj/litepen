import Settings from '@/settings';
import type { TSettings } from 'types/settings';
import { describe, expect, it } from 'vitest';

/**
 * 🔎
 */
describe('Settings', (): void => {

	it('should return a singleton instance', (): void => {
		expect(Settings.use()).toBe(Settings.use());
	});

	it('should initialize with default settings', () => {
		const settings: Readonly<TSettings> = Settings.all();

		expect(settings.autofocus).toBe(true);
		expect(settings.debounce).toBe(330);
		expect(settings.editable).toBe(true);
		expect(settings.extensions).toBeInstanceOf(Array);
		expect(settings.format).toBe('json');
		expect(settings.holder).toBeInstanceOf(Element);
		expect(settings.onUpdate).toBeInstanceOf(Function);
		expect(settings.placeholder).toBe('Write something down...');
	});

	it('should be able to retrieve a setting', () => {
		const settings = Settings.all();
		const placeholder = Settings.get('placeholder');
		const debounce = Settings.get('debounce');

		expect(placeholder).toBe(settings.placeholder);
		expect(debounce).toBe(settings.debounce);
	});

	it('should be able to update a setting', () => {
		Settings.set('autofocus', false);
		Settings.set('debounce', 500);
		Settings.set('editable', false);
		Settings.set('format', 'html');
		Settings.set('placeholder', 'Type here...');
		Settings.set('holder', document.createElement('article'));

		expect(Settings.get('autofocus')).toBe(false);
		expect(Settings.get('debounce')).toBe(500);
		expect(Settings.get('editable')).toBe(false);
		expect(Settings.get('format')).toBe('html');
		expect(Settings.get('placeholder')).toBe('Type here...');
		expect(Settings.get('holder').tagName).toBe('ARTICLE');
	});

	it('should return a copy of settings', () => {
		expect(Settings.all()).not.toBe(Settings.all());
	});
});
