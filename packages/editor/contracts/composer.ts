import type { TSettings } from 'types/settings';

export interface IComposer {
	/**
	 * Build the composer.
	 */
	build(settings: TSettings): void;
}
