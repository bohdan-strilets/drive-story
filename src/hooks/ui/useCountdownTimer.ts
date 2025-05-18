import { useCallback, useEffect, useState } from 'react'

import { Params } from '@/types/hooks/useCountdownTimer'

export const useCountdownTimer = ({ startDate, endDate }: Params) => {
	const calculateTimeLeft = useCallback(() => {
		const start = new Date(startDate)
		const end = new Date(endDate)
		const now = new Date()

		const totalDuration = end.getTime() - start.getTime()
		const elapsedTime = now.getTime() - start.getTime()
		const remainingTime = totalDuration - elapsedTime

		if (remainingTime <= 0) {
			return {
				days: 0,
				hours: 0,
				minutes: 0,
				seconds: 0,
				percentage: 100,
			}
		}

		return {
			days: Math.floor(remainingTime / (1000 * 60 * 60 * 24)),
			hours: Math.floor((remainingTime / (1000 * 60 * 60)) % 24),
			minutes: Math.floor((remainingTime / (1000 * 60)) % 60),
			seconds: Math.floor((remainingTime / 1000) % 60),
			percentage: Math.min(100, (elapsedTime / totalDuration) * 100),
		}
	}, [startDate, endDate])

	const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

	useEffect(() => {
		const timer = setInterval(() => {
			setTimeLeft(calculateTimeLeft())
		}, 1000)

		return () => clearInterval(timer)
	}, [calculateTimeLeft])

	return { timeLeft }
}
