import Factory from '@contracts/factory';
import IAccessibility from '@contracts/accessibility';
import Accessibility from '@/accessibility';

class FAccessibility implements Factory {
	assemble(): IAccessibility {
		return new Accessibility();
	}
}

export default FAccessibility;
