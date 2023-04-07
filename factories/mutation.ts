import IFactory from '@contracts/factory';
import IMutation from '@contracts/ui/mutation';
import Mutation from '@ui/mutation';

/**
 * Detect changes to the content and report them
 * in an understandable format.
 */
class FMutation implements IFactory<IMutation> {
	/**
	 * Assemble a new Mutation instance.
	 */
	assemble(): IMutation {
		return new Mutation();
	}
}

export default FMutation;
