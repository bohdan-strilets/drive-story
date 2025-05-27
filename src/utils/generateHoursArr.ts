export const generateHoursArr = () => {
	const midnight = 24
	const result: string[] = []

	for (let hour = 0; hour < midnight; hour++) {
		const formatHour = hour.toString().padStart(2, '0').padEnd(5, ':00')
		result.push(formatHour)
	}

	return result
}
