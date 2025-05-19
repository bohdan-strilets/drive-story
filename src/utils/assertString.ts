export function assertString(
	val: unknown,
	fieldName = 'Value'
): asserts val is string {
	if (val == null || typeof val !== 'string' || val.trim() === '') {
		throw new Error(`${fieldName} must be a non-empty string`)
	}
}
