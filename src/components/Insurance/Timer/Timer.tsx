import { FC } from 'react'

import CountdownTimer from '@/components/UI/CountdownTimer'
import Paragraph from '@/components/UI/Paragraph'

import { TimerProps } from '@/types/props/Insurance/TimerProps'

import { TimerWrapper } from './Timer.styled'

const Timer: FC<TimerProps> = ({ endDate, startDate }) => {
	return (
		<>
			<div>
				<Paragraph
					color="white"
					background="black"
					padding="5px"
					textAlign="center"
				>
					The insurance policy will be valid for:
				</Paragraph>
			</div>
			<TimerWrapper>
				<CountdownTimer startDate={startDate} endDate={endDate} />
			</TimerWrapper>
		</>
	)
}

export default Timer
