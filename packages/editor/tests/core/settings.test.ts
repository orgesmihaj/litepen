import { describe, expect, it } from 'vitest';
import { createSettings } from '../../src/core/settings';
import type { TSettings } from '../../src/core/settings.types';

/**
 * 🔎
 */
describe('Settings', (): void => {
	it('should create default settings with factory', () => {
		const settings: Readonly<TSettings> = createSettings();

		expect(settings.autofocus).toBe(true);
		expect(settings.debounce).toBe(330);
		expect(settings.editable).toBe(true);
		expect(settings.extensions).toBeInstanceOf(Array);
		expect(settings.format).toBe('json');
		expect(settings.holder).toBeInstanceOf(Element);
		expect(settings.onUpdate).toBeInstanceOf(Function);
		expect(settings.placeholder).toBe('Write something down...');
	});

	it('should validate debounce in factory', () => {
		expect(() => createSettings({ debounce: -1 })).toThrow(RangeError);
		expect(() => createSettings({ debounce: Number.NaN })).toThrow(RangeError);
		expect(() => createSettings({ debounce: Number.POSITIVE_INFINITY })).toThrow(RangeError);
	});

	it('should validate holder in factory', () => {
		expect(() => createSettings({ holder: {} as Element })).toThrow(TypeError);
	});

	it('should allow a zero debounce', () => {
		const settings: Readonly<TSettings> = createSettings({ debounce: 0 });
		expect(settings.debounce).toBe(0);
	});

	it('should use provided holder when valid', () => {
		const holder = document.createElement('section');
		const settings: Readonly<TSettings> = createSettings({ holder });
		expect(settings.holder).toBe(holder);
	});

	it('should resolve holder when explicitly null or undefined', () => {
		const nullHolderSettings: Readonly<TSettings> = createSettings({ holder: null });
		const undefinedHolderSettings: Readonly<TSettings> = createSettings({ holder: undefined });

		expect(nullHolderSettings.holder).toBeInstanceOf(Element);
		expect(undefinedHolderSettings.holder).toBeInstanceOf(Element);
	});

	it('should throw when no DOM is available and holder is not provided', () => {
		const originalElement = (globalThis as { Element?: typeof Element }).Element;
		const originalDocument = (globalThis as { document?: Document }).document;

		try {
			delete (globalThis as { Element?: typeof Element }).Element;
			delete (globalThis as { document?: Document }).document;

			expect(() => createSettings()).toThrow(
				'No DOM is available to create a default holder. Pass `settings.holder` explicitly.'
			);
		} finally {
			(globalThis as { Element?: typeof Element }).Element = originalElement;
			(globalThis as { document?: Document }).document = originalDocument;
		}
	});

	it('should keep explicit override values', () => {
		const onUpdate = () => {};

		const settings: Readonly<TSettings> = createSettings({
			autofocus: false,
			content: { text: 'hello' },
			debounce: 120,
			editable: false,
			format: 'md',
			onUpdate,
			placeholder: 'Type here...',
		});

		expect(settings.autofocus).toBe(false);
		expect(settings.content).toEqual({ text: 'hello' });
		expect(settings.debounce).toBe(120);
		expect(settings.editable).toBe(false);
		expect(settings.format).toBe('md');
		expect(settings.onUpdate).toBe(onUpdate);
		expect(settings.placeholder).toBe('Type here...');
	});

	it('should return an immutable settings object', () => {
		const settings: Readonly<TSettings> = createSettings();
		expect(Object.isFrozen(settings)).toBe(true);

		expect(() => {
			(settings as TSettings).debounce = 999;
		}).toThrow(TypeError);

		expect(settings.debounce).toBe(330);
	});

	it('should clone extensions to avoid mutating caller input', () => {
		const extensions: TSettings['extensions'] = [{ name: 'x', setup: () => {} }];
		const settings: Readonly<TSettings> = createSettings({ extensions });

		extensions.push({ name: 'y', setup: () => {} });

		expect(settings.extensions).toHaveLength(1);
	});
});
