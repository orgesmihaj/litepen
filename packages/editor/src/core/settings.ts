import type { TSettings, TSettingsOverrides } from '@litepen/editor';

/**
 * Normalize public settings input into strict runtime settings.
 * Boundary is flexible; runtime shape is invariant and frozen.
 */
export function createSettings(overrides: TSettingsOverrides = {}): Readonly<TSettings> {
	const settings: TSettings = {
		autofocus: overrides.autofocus ?? true,
		content: overrides.content ?? {},
		debounce: resolveDebounce(overrides.debounce),
		editable: overrides.editable ?? true,
		extensions: resolveExtensions(overrides.extensions),
		format: overrides.format ?? 'json',
		holder: resolveHolder(overrides.holder),
		onUpdate: overrides.onUpdate ?? (() => {}),
		placeholder: overrides.placeholder ?? 'Write something down...',
	};

	return Object.freeze(settings);
}

/**
 * Keep update debounce predictable and safe.
 */
function resolveDebounce(debounce?: number): number {
	const value = debounce ?? 330;

	if (!Number.isFinite(value) || value < 0) {
		throw new RangeError('The debounce setting must be a non-negative number.');
	}
	return value;
}

/**
 * Copy the extension list to avoid mutating caller-owned arrays.
 */
function resolveExtensions(extensions: TSettingsOverrides['extensions']): TSettings['extensions'] {
	return extensions ? [...extensions] : [];
}

/**
 * Ensure `holder` is always a real Element at runtime.
 * In non-DOM environments, require explicit holder input.
 */
function resolveHolder(holder: Element | null | undefined): Element {
	if (typeof Element !== 'undefined' && holder instanceof Element) {
		return holder;
	}

	if (holder != null) {
		throw new TypeError('Expected `holder` to be a DOM `Element` (or `null`/`undefined` for default resolution).');
	}

	if (typeof document !== 'undefined') {
		return document.createElement('div');
	}

	throw new Error('No DOM is available to create a default holder. Pass `settings.holder` explicitly.');
}
