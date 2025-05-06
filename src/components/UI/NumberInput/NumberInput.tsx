import { FieldValues, useController } from 'react-hook-form'
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

const NumberInput = <T extends FieldValues>({
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
}: NumberInputProps<T>) => {
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

	const required = rules?.required
	const step = rules?.step ?? 1
	const min = rules?.min
	const max = rules?.max

	const current = !field.value && field.value !== 0 ? 0 : Number(field.value)

	const incrementValue = () => {
		const next = Math.min(current + step, max)
		field.onChange(next)
	}

	const decrementValue = () => {
		const next = Math.max(current - step, min)
		field.onChange(next)
	}

	return (
		<Wrapper margin={margin} width={width}>
			<InputLabel label={label} required={required} />
			<InputContainer>
				<Input
					{...field}
					value={field.value}
					placeholder={placeholder}
					type="number"
					height={height}
					padding={padding}
					aria-invalid={!!error}
					{...rules}
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
