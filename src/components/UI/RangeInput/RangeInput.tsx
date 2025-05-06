import { FieldValues, useController } from 'react-hook-form'

import { useRangeInput } from '@/hooks/ui/useRangeInput'

import { RangeInputProps } from '@/types/props/UI/RangeInputProps'

import InputErrorMessage from '../InputErrorMessage'
import InputLabel from '../InputLabel'

import {
	FilledTrack,
	RangeContainer,
	Thumb,
	Track,
	ValueContainer,
	ValueLabel,
	Wrapper,
} from './RangeInput.styled'

const RangeInput = <T extends FieldValues>({
	control,
	name,
	label,
	rules,
	defaultValue,
	min = 0,
	max = 100,
	width = '100%',
	margin,
}: RangeInputProps<T>) => {
	const {
		field,
		fieldState: { error },
	} = useController({
		name,
		control,
		rules,
		defaultValue,
	})

	const {
		handleThumbMouseDown,
		handleTrackClick,
		percentage,
		values,
		trackRef,
	} = useRangeInput<T>({ min, max, field, defaultValue })

	const handleKeyDown = (e: React.KeyboardEvent) => {
		switch (e.key) {
			case 'ArrowRight':
			case 'ArrowUp':
				e.preventDefault()
				field.onChange(Math.min(field.value + 1, max))
				break
			case 'ArrowLeft':
			case 'ArrowDown':
				e.preventDefault()
				field.onChange(Math.max(field.value - 1, min))
				break
			case 'Home':
				e.preventDefault()
				field.onChange(min)
				break
			case 'End':
				e.preventDefault()
				field.onChange(max)
				break
		}
	}

	return (
		<Wrapper width={width} margin={margin}>
			<InputLabel label={label} required={Boolean(rules?.required)} />
			<RangeContainer>
				<Track ref={trackRef} onClick={handleTrackClick}>
					<FilledTrack percentage={percentage} />
				</Track>
				<Thumb
					percentage={percentage}
					onMouseDown={handleThumbMouseDown}
					onKeyDown={handleKeyDown}
					role="slider"
					tabIndex={0}
					aria-valuemin={min}
					aria-valuemax={max}
					aria-valuenow={field.value}
					aria-valuetext={`${field.value}`}
					aria-invalid={!!error}
				/>
			</RangeContainer>
			<ValueContainer>
				{values.map((item) => (
					<ValueLabel key={item}>{item}</ValueLabel>
				))}
			</ValueContainer>
			<InputErrorMessage error={error} />
		</Wrapper>
	)
}

export default RangeInput
