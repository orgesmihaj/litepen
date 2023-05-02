import IAccessibility from '@contracts/designer/accessibility';
import IFactory from '@contracts/factory';
import Accessibility from '@/designer/accessibility';

/**
 * Make DOM elements accessible to screen readers.
 */
class FAccessibility implements IFactory<IAccessibility> {
	/**
	 * Assemble a new `Accessibility` instance.
	 */
	assemble(): IAccessibility {
		return new Accessibility();
	}
}

export default FAccessibility;
