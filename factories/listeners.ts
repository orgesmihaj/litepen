import IFactory from "@contracts/factory";
import IListeners from "@contracts/listeners";
import Listeners from "@/listeners";

/**
 * A subscription mechanism to the editor's events.
 * */
class FListeners implements IFactory<IListeners> {
	/**
	 * Assemble a new `Listeners` instance.
	 */
	assemble(): IListeners {
		return Listeners.getInstance();
	}
}

export default FListeners;
