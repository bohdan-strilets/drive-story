/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'

import { CountdownTimerProps } from '@/types/props/UI/CountdownTimerProps'

import { Cell, Wrapper } from './CountdownTimer.styled'

const CountdownTimer: React.FC<CountdownTimerProps> = ({
	startDate,
	endDate,
}) => {
	const calculateTimeLeft = () => {
		const start = new Date(startDate)
		const end = new Date(endDate)
		const now = new Date()

		const totalDuration = end.getTime() - start.getTime()
		const elapsedTime = now.getTime() - start.getTime()
		const remainingTime = totalDuration - elapsedTime

		let timeLeft = {
			days: 0,
			hours: 0,
			minutes: 0,
			seconds: 0,
			percentage: 0,
		}

		if (remainingTime > 0) {
			timeLeft = {
				days: Math.floor(remainingTime / (1000 * 60 * 60 * 24)),
				hours: Math.floor((remainingTime / (1000 * 60 * 60)) % 24),
				minutes: Math.floor((remainingTime / (1000 * 60)) % 60),
				seconds: Math.floor((remainingTime / 1000) % 60),
				percentage: Math.max(0, (elapsedTime / totalDuration) * 100),
			}
		}

		return timeLeft
	}

	const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

	useEffect(() => {
		const timer = setInterval(() => {
			setTimeLeft(calculateTimeLeft())
		}, 1000)

		return () => clearInterval(timer)
	}, [])

	return (
		<Wrapper>
			<Cell>{timeLeft.days} days</Cell>
			<Cell>{timeLeft.hours} hours</Cell>
			<Cell>{timeLeft.minutes} minutes</Cell>
			<Cell>{timeLeft.seconds} seconds</Cell>
		</Wrapper>
	)
}

export default CountdownTimer
