import { useEffect, useState } from 'react'

import { AgeResult } from '@/types/types/AgeResult'

export const useCalculateAge = (date: Date): AgeResult => {
	const [age, setAge] = useState<AgeResult>({ ageInYears: 0, detailedAge: '' })
	const formatedDate = new Date(date)

	const getYearWord = (years: number): string => {
		return years === 1 ? 'year' : 'years'
	}

	useEffect(() => {
		const calculateAge = (date: Date): AgeResult => {
			const now = new Date()

			let years = now.getFullYear() - date.getFullYear()
			const monthDiff = now.getMonth() - date.getMonth()

			if (
				monthDiff < 0 ||
				(monthDiff === 0 && now.getDate() < date.getDate())
			) {
				years--
			}

			let detailed = ''

			if (years < 1) {
				let months = now.getMonth() - date.getMonth()
				let days = now.getDate() - date.getDate()
				if (days < 0) {
					const prevMonthDate = new Date(now.getFullYear(), now.getMonth(), 0)
					days += prevMonthDate.getDate()
					months--
				}

				if (months < 0) {
					months += 12
				}

				if (months > 0) {
					detailed = `${months} ${months === 1 ? 'month' : 'months'} ${days} days`
				} else {
					detailed = `${days} days`
				}
			} else {
				detailed = `${years} ${getYearWord(years)}`
			}

			return {
				ageInYears: years,
				detailedAge: detailed,
			}
		}

		setAge(calculateAge(formatedDate))
	}, [date])

	return age
}
