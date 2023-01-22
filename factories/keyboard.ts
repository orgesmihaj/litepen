import IFactory from '@contracts/factory';
import IKeyboard from '@contracts/keyboard';
import FListeners from '@factories/listeners';
import Keyboard from '@/keyboard';

class FKeyboard implements IFactory {
	assemble(): IKeyboard {
		return new Keyboard(new FListeners().assemble());
	}
}

export default FKeyboard;
