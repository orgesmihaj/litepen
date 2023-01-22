import IFactory from '@contracts/factory';
import IListeners from '@contracts/listeners';
import Listeners from '@/listeners';

class FListeners implements IFactory {
	assemble(): IListeners {
		return Listeners.getInstance();
	}
}

export default FListeners;
