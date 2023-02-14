/**
 * Assemble a new instance of a given type.
 */
interface IFactory<TEditorInstance> {
	/**
	 * Assemble a new instance.
	 */
	assemble(): TEditorInstance;
}

export default IFactory;
