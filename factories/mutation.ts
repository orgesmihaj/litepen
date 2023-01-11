import IFactory from '@contracts/factory';
import IMutation from '@contracts/mutation';
import Mutation from '@/mutation';

class FMutation implements IFactory {
	assemble(): IMutation {
		return new Mutation();
	}
}

export default FMutation;
