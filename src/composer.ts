import { TSettings } from 'types/settings';
import FEditor from '@factories/editor';
import Settings from '@/settings';

class Composer {
	constructor(settings: TSettings) {
		Settings.use(settings);

		new FEditor().assemble().ignite();
	}
}

export default Composer;
