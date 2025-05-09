import { useCallback, useMemo, useState } from 'react'
import { FieldValues, Path, useController } from 'react-hook-form'
import { FaCalendarAlt } from 'react-icons/fa'

import Calendar from '@/components/Calendar'

import useClickOutside from '@/hooks/ui/useClickOutside'

import { parsedDateToString } from '@/utils/parsedDateToString'

import { DatePickerProps } from '@/types/props/UI/DatePickerProps'

import InputErrorMessage from '../InputErrorMessage'
import InputLabel from '../InputLabel'

import { CustomInput, Wrapper } from './DatePicker.styled'

const DatePicker = <
	TFieldValues extends FieldValues,
	TName extends Path<TFieldValues>,
>({
	control,
	name,
	placeholder,
	label,
	defaultValue,
	rules,
	width = '100%',
	margin,
}: DatePickerProps<TFieldValues, TName>) => {
	const {
		field: { onChange, value },
		fieldState: { error },
	} = useController({
		name,
		control,
		rules,
		defaultValue,
	})

	const required = rules?.required

	const [currentDate, setCurrentDate] = useState(new Date(value))
	const [isOpen, setIsOpen] = useState(false)

	const toggleList = useCallback(() => setIsOpen((state) => !state), [])
	const closeList = useCallback(() => setIsOpen(false), [])

	const ref = useClickOutside<HTMLDivElement>(closeList)

	const displayValue = useMemo((): string => {
		const selectedData = parsedDateToString(value)
		return selectedData ? selectedData : placeholder
	}, [placeholder, value])

	return (
		<Wrapper ref={ref} width={width} margin={margin}>
			<InputLabel label={label} required={required} />
			<CustomInput
				type="button"
				onClick={toggleList}
				aria-haspopup="dialog"
				aria-expanded={isOpen}
			>
				{displayValue}
				<FaCalendarAlt />
			</CustomInput>
			{isOpen && (
				<Calendar
					currentDate={currentDate}
					setCurrentDate={setCurrentDate}
					onChange={onChange}
					toggle={toggleList}
					minDate={new Date(rules.minDate)}
					maxDate={new Date(rules.maxDate)}
				/>
			)}
			<InputErrorMessage error={error} />
		</Wrapper>
	)
}

export default DatePicker
