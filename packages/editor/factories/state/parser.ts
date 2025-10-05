import type { IFactory } from 'contracts/factory';
import type { IParser } from 'contracts/state/parser';
import Parser from '../../src/state/parser.ts';

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
