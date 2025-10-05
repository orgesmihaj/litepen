import type { TContent } from 'types/content';

/**
 * Define the type of the callback function that will
 * be executed when the mutation is observed.
 */
export type TMutationCallback = (content: TContent) => void;

/**
 * Define the type of the function that will be used
 * to debounce the mutation callback.
 */
export type TMutationDebounce = (records: MutationRecord[]) => void;
