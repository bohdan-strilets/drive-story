import { FC } from 'react'
import { IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io'

import Button from '@/components/UI/Button'
import DropdownList from '@/components/UI/DropdownList'

import useResponsive from '@/hooks/ui/useResponsive'

import {
	formatValue,
	generateDropdownOptions,
} from '@/utils/generateDropdownOptions'
import { generateNumberArray } from '@/utils/generateNumberArray'

import { Months } from '@/types/enums/Months'
import { ControllersProps } from '@/types/props/Calendar/ControllersProps'

import { Group, Wrapper } from './Controllers.styled'

const Controllers: FC<ControllersProps> = ({
	currentDate,
	handleNextMonth,
	handlePreviousMonth,
	control,
	minDate,
	maxDate,
}) => {
	const yearValues = generateNumberArray(
		new Date(minDate).getFullYear(),
		new Date(maxDate).getFullYear()
	)

	const yearDropdownOptions = generateDropdownOptions(yearValues)

	const months = Object.values(Months)
	const monthValues = generateNumberArray(0, months.length)
	const monthDropdownOptions = generateDropdownOptions(months, monthValues)

	const defaultMonth = formatValue(String(currentDate.getMonth()))
	const defaultYear = formatValue(String(currentDate.getFullYear()))

	const { maxTablet, minLaptop, minTablet } = useResponsive()

	const buttonWidth = (): string => {
		if (minTablet && maxTablet) {
			return '60px'
		}
		if (minLaptop) {
			return '80px'
		}
		return '100%'
	}

	const dropdownWidth = (): string => {
		if (minTablet && maxTablet) {
			return '150px'
		}
		if (minLaptop) {
			return '200px'
		}
		return '100%'
	}

	return (
		<Wrapper>
			<Button
				onClick={handlePreviousMonth}
				color="white"
				background="gray"
				hoverColor="black"
				hoverBackground="yellow"
				width={buttonWidth()}
				height={maxTablet ? '30px' : '40px'}
			>
				<IoMdArrowDropleft size={26} />
			</Button>
			<Group>
				<DropdownList
					control={control}
					options={monthDropdownOptions}
					name="month"
					width={dropdownWidth()}
					margin="0 10px 0 0"
					placeholder="Month"
					defaultValue={defaultMonth}
				/>
				<DropdownList
					control={control}
					options={yearDropdownOptions}
					name="year"
					width={dropdownWidth()}
					placeholder="Year"
					defaultValue={defaultYear}
				/>
			</Group>
			<Button
				onClick={handleNextMonth}
				color="white"
				background="gray"
				hoverColor="black"
				hoverBackground="yellow"
				width={buttonWidth()}
				height={maxTablet ? '30px' : '40px'}
			>
				<IoMdArrowDropright size={26} />
			</Button>
		</Wrapper>
	)
}

export default Controllers
