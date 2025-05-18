import React from 'react'

import { useCountdownTimer } from '@/hooks/ui/useCountdownTimer'

import { CountdownTimerProps } from '@/types/props/UI/CountdownTimerProps'

import { Cell, Label, Wrapper } from './CountdownTimer.styled'

const CountdownTimer: React.FC<CountdownTimerProps> = ({
	startDate,
	endDate,
}) => {
	const { timeLeft } = useCountdownTimer({ startDate, endDate })

	return (
		<Wrapper>
			<Cell>
				<p>{timeLeft.days}</p>
				<Label>days</Label>
			</Cell>
			<Cell>
				<p>{timeLeft.hours}</p>
				<Label>hours</Label>
			</Cell>
			<Cell>
				<p>{timeLeft.minutes}</p>
				<Label>minutes</Label>
			</Cell>
			<Cell>
				<p>{timeLeft.seconds}</p>
				<Label>seconds</Label>
			</Cell>
		</Wrapper>
	)
}

export default CountdownTimer
