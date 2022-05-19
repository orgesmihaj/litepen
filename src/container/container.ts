import IContainer from '../contracts/container/container';
import { TConstructor, TFactory } from '../types/container';

class Container implements IContainer {
	/**
	 * The bindings `registered` to the container.
	 */
	private bindings: Map<any, any>;

	constructor() {
		this.bindings = new Map();
	}

	/**
	 * Register a binding with the container.
	 *
	 * @param  {TConstructor<T>} abstract
	 * @param  {TFactory<IContainer, T>} factory
	 * @returns void
	 */
	public register<T>(
		abstract: TConstructor<T>,
		factory: TFactory<IContainer, T>
	): void {
		this.bindings.set(abstract, factory);
	}

	/**
	 * Get an instance from the container.
	 *
	 * @param  {T} abstract
	 * @returns any
	 */
	public compose<T>(abstract: T): any {
		return this.bindings.get(abstract)(this);
	}
}

export default Container;
