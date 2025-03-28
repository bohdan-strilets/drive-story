import { FC } from 'react'

import { WeekProps } from '@/types/props/Calendar/WeekProps'

import { fadeIn } from '@/animations/fadeIn'

import DayCell from '../DayCell'

import { Day, Week, Wrapper } from './Month.styled'

const Month: FC<WeekProps> = ({ currentMonth, handleDayClick, currentDay }) => {
	return (
		<Wrapper>
			{currentMonth.map((week, index) => (
				<Week key={index}>
					{week.map((day, index) => (
						<Day {...fadeIn(index * 0.2)} key={index}>
							{day ? (
								<DayCell
									handleDayClick={handleDayClick}
									day={day}
									currentDay={currentDay}
								/>
							) : (
								<DayCell key={index} currentDay={currentDay} />
							)}
						</Day>
					))}
				</Week>
			))}
		</Wrapper>
	)
}

export default Month
