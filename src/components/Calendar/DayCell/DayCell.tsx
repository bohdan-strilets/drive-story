import { FC } from 'react'

import { DayCellProps } from '@/types/props/Calendar/DayCellProps'

import { Cell } from './DayCell.styled'

const DayCell: FC<DayCellProps> = ({ handleDayClick, day, currentDay }) => {
	const handleClick = () => {
		if (handleDayClick && day) {
			handleDayClick(day)
		}
	}

	return (
		<Cell
			type="button"
			onClick={handleClick}
			currentDate={currentDay === day?.getDate()}
		>
			{day ? day.getDate() : ''}
		</Cell>
	)
}

export default DayCell
