export const addMonthsKeepingDate = (date: Date, months: number): Date => {
	const d = new Date(date)
	const targetDay = d.getDate()
	d.setMonth(d.getMonth() + months)

	if (d.getDate() !== targetDay) {
		d.setDate(0)
	}

	return d
}
