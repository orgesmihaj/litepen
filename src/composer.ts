import IComposer from '@contracts/composer';
import FEditor from '@factories/editor';
import { TSettings } from 'types/settings';
import Settings from '@/settings';

/**
 * What's on your mind? ...✏️
 */
class Composer implements IComposer {
	constructor(settings: TSettings) {
		this.build(settings);
	}

	/**
	 * Build the composer.
	 */
	build(settings: TSettings): void {
		Settings.use(settings);

		new FEditor().assemble().ignite();
	}
}

export default Composer;
