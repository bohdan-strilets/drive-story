import { useCallback, useRef } from 'react'
import { FieldValues, Path } from 'react-hook-form'

import { Params } from '@/types/hooks/useRangeInputParams'

export const useRangeInput = <
	TFieldValues extends FieldValues,
	TName extends Path<TFieldValues>,
>({
	min,
	max,
	field,
	defaultValue,
}: Params<TFieldValues, TName>) => {
	const trackRef = useRef<HTMLDivElement>(null)

	const getPercentage = (value: number) => (value - min) / (max - min)

	const updateValueFromPosition = useCallback(
		(clientX: number) => {
			if (trackRef.current) {
				const { left, width: trackWidth } =
					trackRef.current.getBoundingClientRect()
				let newPercent = (clientX - left) / trackWidth
				if (newPercent < 0) newPercent = 0
				if (newPercent > 1) newPercent = 1
				const newValue = Math.round(newPercent * (max - min) + min)
				field.onChange(newValue)
			}
		},
		[field, min, max]
	)

	const handleTrackClick = useCallback(
		(e: React.MouseEvent<HTMLDivElement>) => {
			updateValueFromPosition(e.clientX)
		},
		[updateValueFromPosition]
	)

	const handleThumbMouseDown = useCallback(
		(e: React.MouseEvent<HTMLDivElement>) => {
			e.stopPropagation()
			const handleMouseMove = (moveEvent: MouseEvent) => {
				updateValueFromPosition(moveEvent.clientX)
			}

			const handleMouseUp = () => {
				document.removeEventListener('mousemove', handleMouseMove)
				document.removeEventListener('mouseup', handleMouseUp)
			}

			document.addEventListener('mousemove', handleMouseMove)
			document.addEventListener('mouseup', handleMouseUp)
		},
		[updateValueFromPosition]
	)

	const percentage = getPercentage(
		typeof field.value === 'number' ? field.value : defaultValue || min
	)

	const values = Array.from({ length: max - min + 1 }, (_, i) => min + i)

	return {
		handleTrackClick,
		handleThumbMouseDown,
		percentage,
		values,
		trackRef,
	}
}
