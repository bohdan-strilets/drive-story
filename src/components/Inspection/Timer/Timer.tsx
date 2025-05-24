import { FC } from 'react'

import CountdownTimer from '@/components/UI/CountdownTimer'
import Paragraph from '@/components/UI/Paragraph'

import { TimerProps } from '@/types/props/Inspection/TimerProps'

import { Wrapper } from './Timer.styled'

const Timer: FC<TimerProps> = ({ startDate, endDate }) => {
	const start = new Date(startDate)
	const nextYear = new Date(
		start.getFullYear() + 1,
		start.getMonth(),
		start.getDate() - 1
	)

	const end = endDate ? endDate : endDate || nextYear

	return (
		<>
			<Paragraph
				color="white"
				background="black"
				padding="5px"
				textAlign="center"
			>
				The technical inspection will be valid for:
			</Paragraph>
			<Wrapper>
				<CountdownTimer startDate={startDate} endDate={end} />
			</Wrapper>
		</>
	)
}

export default Timer
