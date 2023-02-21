import Factory from '@contracts/factory';
import IAccessibility from '@contracts/accessibility';
import Accessibility from '@/accessibility';

/**
 * Make DOM elements accessible to screen readers.
 * */
class FAccessibility implements Factory<IAccessibility> {
	/**
	 * Instantiate a new accessibility object.
	 */
	assemble(): IAccessibility {
		return new Accessibility();
	}
}

export default FAccessibility;
