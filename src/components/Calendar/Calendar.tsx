import { FC, useEffect, useMemo } from 'react'
import { useForm } from 'react-hook-form'

import useCalendar from '@/hooks/ui/useCalendar'

import { formatValue } from '@/utils/generateDropdownOptions'

import { Months } from '@/types/enums/Months'
import { CalendarProps } from '@/types/props/Calendar/CalendarProps'

import { Fields, Validation } from '@/validation/schemas/MonthYearSchema'

import { Wrapper } from './Calendar.styled'
import Controllers from './Controllers'
import Month from './Month'
import NamesDaysWeek from './NamesDaysWeek'

const monthNames = Object.values(Months)

const Calendar: FC<CalendarProps> = ({
	currentDate,
	setCurrentDate,
	onChange,
	toggle,
	minDate,
	maxDate,
}) => {
	const { control, watch, reset } = useForm<Fields>({
		...Validation,
		defaultValues: {
			year: String(currentDate.getFullYear()),
			month: formatValue(monthNames[currentDate.getMonth()]),
		},
	})

	const year = Number(watch('year'))
	const rawMonth = watch('month')

	const monthIndex = useMemo(() => {
		const idx = monthNames.findIndex(
			(m) => m.toLowerCase() === rawMonth?.toLowerCase()
		)
		return idx >= 0 ? idx : 0
	}, [rawMonth])

	useEffect(() => {
		setCurrentDate(new Date(year, monthIndex, 1))
	}, [year, monthIndex, setCurrentDate])

	const handlePreviousMonth = () => {
		let y = currentDate.getFullYear()
		let m = currentDate.getMonth() - 1

		if (m < 0) {
			m = 11
			y--
		}

		const min = new Date(minDate)
		if (y < min.getFullYear() || (y === min.getFullYear() && m < 0)) {
			return
		}

		const newDate = new Date(y, m, 1)
		reset({
			year: String(y),
			month: formatValue(monthNames[m]),
		})
		setCurrentDate(newDate)
	}

	const handleNextMonth = () => {
		let y = currentDate.getFullYear()
		let m = currentDate.getMonth() + 1

		if (m > 11) {
			m = 0
			y++
		}

		const max = new Date(maxDate)
		if (y > max.getFullYear() || (y === max.getFullYear() && m > 11)) {
			return
		}

		const newDate = new Date(y, m, 1)
		reset({
			year: String(y),
			month: formatValue(monthNames[m]),
		})
		setCurrentDate(newDate)
	}

	const { getDaysOfMonth, getCurrentDate } = useCalendar(currentDate)
	const currentMonth = getDaysOfMonth()
	const currentDay = getCurrentDate()

	const handleDayClick = (day: Date) => {
		const newDate = new Date(year, monthIndex, day.getDate())
		onChange(newDate)
		setCurrentDate(newDate)
		toggle()
	}

	return (
		<Wrapper>
			<Controllers
				handleNextMonth={handleNextMonth}
				handlePreviousMonth={handlePreviousMonth}
				control={control}
				minDate={new Date(minDate)}
				maxDate={new Date(maxDate)}
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
