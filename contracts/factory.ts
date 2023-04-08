/**
 * Assemble a new instance of a given type.
 */
interface IFactory<TComponent> {
	/**
	 * Assemble a new instance.
	 */
	assemble(): TComponent;
}

export default IFactory;
