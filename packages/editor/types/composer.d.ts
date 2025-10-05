import type { IComposer } from 'contracts/composer';
import type { TSettings } from 'types/settings';

/**
 * What's on your mind? ...
 */
declare class Composer implements IComposer {
	constructor(settings: TSettings);

	build(settings: TSettings): void;
}

export default Composer;
