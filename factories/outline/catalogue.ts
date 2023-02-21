import ICatalogue from '@contracts/outline/catalogue';
import IFactory from '@contracts/factory';
import Catalogue from '@/outline/catalogue';

/**
 * Define content that can be part of the
 * editor's outline.
 */
class FCatalogue implements IFactory<ICatalogue> {
	/**
	 * Instantiate a new catalogue.
	 */
	assemble(): ICatalogue {
		return new Catalogue();
	}
}

export default FCatalogue;
