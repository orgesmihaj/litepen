/**
 * Define the type of a class constructor that accepts
 * any amount of arguments (of type any) and returns a
 * constructor function.
 */
type TConstructor<T> = new (...args: never[]) => T;

/**
 * Define the type of a function that accepts a DI
 * Container as an argument and return a class instance.
 */
type TFactory<C, T> = (container: C) => T;

export { TConstructor, TFactory };
