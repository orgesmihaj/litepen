/**
 * Content helper.
 */
class HContent {
	/**
	 * Generate a unique identifier.
	 * */
	static uniqueIdentifier(): string {
		const timestamp = Date.now().toString(36);
		const random = Math.random().toString(36).substring(2);

		return `${timestamp}-${random}`;
	}
}

export default HContent;
