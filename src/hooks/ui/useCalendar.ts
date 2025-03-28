import { MonthYear } from '@/types/types/MonthYear'

const useCalendar = (date: Date) => {
	const getMonthYear = (): MonthYear => {
		const year = date.getFullYear()
		const month = date.getMonth()
		return { year, month }
	}

	const getNumberDaysInMonth = (): number => {
		const monthYear = getMonthYear()
		return new Date(monthYear.year, monthYear.month + 1, 0).getDate()
	}

	const getStartWeek = (): number => {
		const monthYear = getMonthYear()
		const firstDayOfMonth = new Date(monthYear.year, monthYear.month, 1)
		const dayOfWeek = firstDayOfMonth.getDay() - 1

		if (dayOfWeek === -1) return 6
		return dayOfWeek
	}

	const getCurrentDate = (): number => {
		return new Date(date).getDate()
	}

	const getDaysOfMonth = (): (undefined[] | Date[])[] => {
		const daysOfMonth: (undefined[] | Date[])[] = []
		const daysInWeek = 7
		const numberDaysInMonth = getNumberDaysInMonth()
		const startWeekOn = getStartWeek()
		const monthYear = getMonthYear()

		let day = 1

		const numberOfWeeks = Math.ceil(
			(numberDaysInMonth + startWeekOn) / daysInWeek
		)

		for (let i = 0; i < numberOfWeeks; i++) {
			daysOfMonth[i] = []
			const week = daysOfMonth[i]

			for (let j = 0; j < daysInWeek; j++) {
				if (day > numberDaysInMonth || (i === 0 && j < startWeekOn)) {
					week[j] = undefined
				} else {
					const newDay = new Date(monthYear.year, monthYear.month, day++)
					week[j] = newDay
				}
			}
		}

		return daysOfMonth
	}

	return {
		getDaysOfMonth,
		getMonthYear,
		getCurrentDate,
	}
}

export default useCalendar
