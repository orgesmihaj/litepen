import IFactory from '@contracts/factory';
import IParser from '@contracts/state/parser';
import Parser from '@/state/parser';

/**
 * Parse state into different formats.
 */
class FParser implements IFactory<IParser> {
	/**
	 * Assemble a new `Parser` instance.
	 */
	assemble(): IParser {
		return new Parser();
	}
}

export default FParser;
