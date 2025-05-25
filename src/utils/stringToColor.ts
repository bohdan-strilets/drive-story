export const stringToColor = (input: string): string => {
	const charCode = input.charCodeAt(0)
	const hue = (charCode * 137.5) % 360
	return `hsl(${hue}, 60%, 50%)`
}
