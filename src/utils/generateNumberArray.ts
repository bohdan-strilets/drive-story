export const generateNumberArray = (start: number, end: number): string[] => {
	const result: string[] = []
	for (let i = start; i <= end; i++) {
		result.push(i.toString())
	}
	return result
}
