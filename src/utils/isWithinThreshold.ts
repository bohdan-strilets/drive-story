export const isWithinThreshold = (
	targetDate: Date,
	daysBefore: number = 0
): boolean => {
	const MS_PER_DAY = 24 * 60 * 60 * 1000

	const today = new Date()
	today.setHours(0, 0, 0, 0)

	const eventDay = new Date(targetDate)
	eventDay.setHours(0, 0, 0, 0)

	const diffDays = (eventDay.getTime() - today.getTime()) / MS_PER_DAY

	return diffDays <= daysBefore && diffDays >= 0
}
