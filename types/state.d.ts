import ICatalogue from "@contracts/outline/catalogue";

/**
 * The dependencies of the `State` instance.
 */
export type TBlueprint = {
	/**
	 * Define content that can be part of the
	 * editor's outline.
	 */
	catalogue: ICatalogue;
};
