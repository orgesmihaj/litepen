import IFactory from '@contracts/factory';
import IMutation from '@contracts/designer/mutation';
import Mutation from '@/designer/mutation';

/**
 * Detect changes made to the element.
 */
class FMutation implements IFactory<IMutation> {
	/**
	 * Assemble a new `Mutation` instance.
	 */
	assemble(): IMutation {
		return new Mutation();
	}
}

export default FMutation;
