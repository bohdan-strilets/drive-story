import { useMemo } from 'react'

import { addMonthsKeepingDate } from '@/utils/addMonthsKeepingDate'

import { NumberRates } from '@/types/enums/NumberRates'
import { Params } from '@/types/hooks/useGeneratePayments'
import { Payment } from '@/types/types/Payment'

export const useGeneratePayments = ({
	startDate,
	endDate,
	installmentsCount = NumberRates.one,
	totalInstallmentsSum = 0,
	isPaid = false,
}: Params): Payment[] => {
	return useMemo(() => {
		const start = new Date(startDate)
		const end = new Date(endDate)

		if (isPaid) {
			return [{ date: start, amount: totalInstallmentsSum, isPaid: true }]
		}

		const count = Math.max(Number(installmentsCount), 1)
		const totalMonths =
			(end.getFullYear() - start.getFullYear()) * 12 +
			(end.getMonth() - start.getMonth())

		const stepMonths = count > 1 ? Math.floor(totalMonths / (count - 1)) : 0
		const baseAmount = Math.floor(totalInstallmentsSum / count)
		const remainder = totalInstallmentsSum - baseAmount * count

		const rawPayments: Payment[] = []
		for (let i = 0; i < count; i++) {
			const dt =
				i === count - 1
					? new Date(end)
					: addMonthsKeepingDate(start, i * stepMonths)
			const amount = i === count - 1 ? baseAmount + remainder : baseAmount

			rawPayments.push({ date: dt, amount, isPaid: false })
		}

		const today = new Date()
		const payments = rawPayments.map((p) => ({
			...p,
			isPaid: p.isPaid || p.date <= today,
		}))

		return payments
	}, [startDate, endDate, installmentsCount, totalInstallmentsSum, isPaid])
}
