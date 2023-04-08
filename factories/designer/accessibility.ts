import IAccessibility from "@contracts/ui/accessibility";
import Factory from "@contracts/factory";
import Accessibility from "@ui/accessibility";

/**
 * Make DOM elements accessible to screen readers.
 */
class FAccessibility implements Factory<IAccessibility> {
	/**
	 * Assemble a new `Accessibility` instance.
	 */
	assemble(): IAccessibility {
		return new Accessibility();
	}
}

export default FAccessibility;
