import { useMemo } from 'react'
import { FieldValues, Path, useController } from 'react-hook-form'
import { FaMinus, FaPlus } from 'react-icons/fa6'

import useResponsive from '@/hooks/ui/useResponsive'

import { formatNumberWithSpaces } from '@/utils/formatNumberWithSpaces'

import { NumberInputProps } from '@/types/props/UI/NumberInputProps'

import Button from '../Button'
import InputErrorMessage from '../InputErrorMessage'
import InputLabel from '../InputLabel'

import {
	Controllers,
	Input,
	InputContainer,
	ThresholdContainer,
	ThresholdValue,
	Wrapper,
} from './NumberInput.styled'

const NumberInput = <
	TFieldValues extends FieldValues,
	TName extends Path<TFieldValues>,
>({
	control,
	name,
	label,
	rules,
	defaultValue,
	placeholder,
	width,
	height,
	margin,
	padding,
}: NumberInputProps<TFieldValues, TName>) => {
	const { maxMobile } = useResponsive()

	const {
		field,
		fieldState: { error },
	} = useController({
		name,
		control,
		rules,
		defaultValue,
	})

	const { required, step = 1, min = -Infinity, max = Infinity } = rules ?? {}

	const stepDecimals = useMemo(
		() => step.toString().split('.')[1]?.length ?? 0,
		[step]
	)

	const round = (value: number) => Number(value.toFixed(stepDecimals))

	const current =
		field.value === '' || field.value == null ? 0 : Number(field.value)

	const incrementValue = () => {
		const next = round(Math.min(current + step, max))
		field.onChange(next)
	}

	const decrementValue = () => {
		const next = round(Math.max(current - step, min))
		field.onChange(next)
	}

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const raw = e.target.value
		field.onChange(raw === '' ? '' : round(Number(raw)))
	}

	return (
		<Wrapper margin={margin} width={width}>
			<InputLabel label={label} required={required} />

			<InputContainer>
				<Input
					{...field}
					onChange={handleChange}
					type="number"
					value={field.value}
					placeholder={placeholder}
					min={min}
					max={max}
					step={step}
					height={height}
					padding={padding}
					aria-invalid={!!error}
				/>

				<Controllers>
					<li>
						<Button
							onClick={decrementValue}
							width={maxMobile ? '30px' : '75px'}
							margin="0 10px"
							color="black"
							background="yellow"
							hoverColor="white"
							hoverBackground="gray"
							type="button"
						>
							<FaMinus />
						</Button>
					</li>
					<li>
						<Button
							onClick={incrementValue}
							width={maxMobile ? '30px' : '75px'}
							color="black"
							background="yellow"
							hoverColor="white"
							hoverBackground="gray"
							type="button"
						>
							<FaPlus />
						</Button>
					</li>
				</Controllers>
			</InputContainer>

			<ThresholdContainer>
				<ThresholdValue>Min: {formatNumberWithSpaces(min)}</ThresholdValue>
				<ThresholdValue>Max: {formatNumberWithSpaces(max)}</ThresholdValue>
			</ThresholdContainer>

			<InputErrorMessage error={error} />
		</Wrapper>
	)
}

export default NumberInput
