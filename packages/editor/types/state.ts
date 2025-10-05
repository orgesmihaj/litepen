import type { IContent } from "contracts/outline/content";
import type { ICatalogue } from 'contracts/outline/catalogue';

/**
 * The dependencies of the `State` instance.
 */
export type TBlueprint = {
	catalogue: ICatalogue;	
}

/**
 * Define the type of the state.
 */
export type TState = Map<string, IContent>;
