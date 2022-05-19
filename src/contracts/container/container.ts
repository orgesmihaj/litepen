import { TConstructor, TFactory } from '../../types/container';

interface IContainer {
	/**
	 * Register a binding with the container.
	 *
	 * @param  {TConstructor<T>} abstract
	 * @param  {TFactory<IContainer, T>} factory
	 * @returns void
	 */
	register<T>(
		abstract: TConstructor<T>,
		factory: TFactory<IContainer, T>
	): void;

	/**
	 * Get an instance from the container.
	 *
	 * @param  {T} abstract
	 * @returns any
	 */
	compose<T>(abstract: T): any;
}

export default IContainer;
