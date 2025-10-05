/**
 * Assemble a new instance of a given type.
 */
export interface IFactory<TComponent> {
	/**
	 * Assemble a new instance.
	 */
	assemble(blueprint?: any): TComponent;
}


