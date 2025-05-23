import { useCallback, useMemo, useState } from 'react'

import { Params } from '@/types/hooks/usePaymentProgressBar'
import { Payment } from '@/types/types/Payment'

export const usePaymentProgressBar = ({ payments, totalAmount }: Params) => {
	const [hovered, setHovered] = useState(false)
	const [focusedIndex, setFocusedIndex] = useState<number | null>(null)

	const sorted = useMemo<Payment[]>(
		() => [...payments].sort((a, b) => a.date.getTime() - b.date.getTime()),
		[payments]
	)

	const total = useMemo(
		() => totalAmount ?? sorted.reduce((sum, p) => sum + p.amount, 0),
		[sorted, totalAmount]
	)

	const paidSum = useMemo(
		() => sorted.filter((p) => p.isPaid).reduce((sum, p) => sum + p.amount, 0),
		[sorted]
	)

	const paidCount = useMemo(
		() => sorted.filter((p) => p.isPaid).length,
		[sorted]
	)

	const segmentCount = useMemo(
		() => (sorted.length > 1 ? sorted.length - 1 : 1),
		[sorted]
	)

	const step = useMemo(() => 100 / segmentCount, [segmentCount])

	const paidPercent = useMemo(
		() => Number((paidCount * step).toFixed(2)),
		[paidCount, step]
	)

	const markers = useMemo(
		() =>
			sorted.map((p, i) => ({
				payment: p,
				position: segmentCount > 1 ? (i / segmentCount) * 100 : 100,
			})),
		[sorted, segmentCount]
	)

	const handleMouseEnter = useCallback(() => setHovered(true), [])
	const handleMouseLeave = useCallback(() => setHovered(false), [])
	const handleFocus = useCallback((idx: number) => setFocusedIndex(idx), [])
	const handleBlur = useCallback(() => setFocusedIndex(null), [])

	return {
		sorted,
		markers,
		total,
		paidSum,
		paidCount,
		paidPercent,
		hovered,
		focusedIndex,
		setHovered,
		setFocusedIndex,
		handleMouseEnter,
		handleMouseLeave,
		handleFocus,
		handleBlur,
	}
}
