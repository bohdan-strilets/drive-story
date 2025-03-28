import { FC } from 'react'
import { useForm } from 'react-hook-form'

import useCalendar from '@/hooks/ui/useCalendar'

import { CalendarProps } from '@/types/props/Calendar/CalendarProps'

import {
	SelectMonthYearFields,
	SelectMonthYearValidation,
} from '@/validation/SelectMonthYearSchema'

import { Wrapper } from './Calendar.styled'
import Controllers from './Controllers'
import Month from './Month'
import NamesDaysWeek from './NamesDaysWeek'

const Calendar: FC<CalendarProps> = ({
	currentDate,
	setCurrentDate,
	onChange,
	toggle,
}) => {
	const { control, setValue, getValues } = useForm<SelectMonthYearFields>(
		SelectMonthYearValidation
	)

	const handlePreviousMonth = () => {
		let year = currentDate.getFullYear()
		let month = currentDate.getMonth() - 1

		if (month < 0) {
			month = 11
			year--
		}

		const newDate = new Date(year, month, 1)

		setValue('month', String(month))
		setValue('year', String(year))
		setCurrentDate(newDate)
	}

	const handleNextMonth = () => {
		let year = currentDate.getFullYear()
		let month = currentDate.getMonth() + 1

		if (month > 11) {
			month = 0
			year++
		}
		const newDate = new Date(year, month, 1)
		const today = new Date()

		if (
			newDate.getFullYear() > today.getFullYear() ||
			(newDate.getFullYear() === today.getFullYear() &&
				newDate.getMonth() > today.getMonth())
		) {
			return
		}

		setValue('month', String(month))
		setValue('year', String(year))
		setCurrentDate(newDate)
	}

	const { getDaysOfMonth, getCurrentDate } = useCalendar(currentDate)

	const currentMonth = getDaysOfMonth()
	const currentDay = getCurrentDate()

	const handleDayClick = (day: Date) => {
		const { month, year } = getValues()
		const numericMonth = Number(month)
		const numericYear = Number(year)
		const newDate = new Date(numericYear, numericMonth, day.getDate())

		onChange(newDate)
		setCurrentDate(newDate)
		toggle()
	}

	return (
		<Wrapper>
			<Controllers
				currentDate={currentDate}
				handleNextMonth={handleNextMonth}
				handlePreviousMonth={handlePreviousMonth}
				control={control}
			/>
			<NamesDaysWeek />
			<Month
				currentMonth={currentMonth}
				currentDay={currentDay}
				handleDayClick={handleDayClick}
			/>
		</Wrapper>
	)
}

export default Calendar
