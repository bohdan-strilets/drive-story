import { FieldValues, useController } from 'react-hook-form'

import { NumberInputProps } from '@/types/props/UI/NumberInputProps'

import InputErrorMessage from '../InputErrorMessage'
import InputLabel from '../InputLabel'

import { Input, Wrapper } from './NumberInput.styled'

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

	return (
		<Wrapper margin={margin} width={width}>
			<InputLabel label={label} required={required} />
			<Input
				{...field}
				value={field.value}
				placeholder={placeholder}
				type="number"
				height={height}
				padding={padding}
				aria-invalid={!!error}
			/>
			<InputErrorMessage error={error} />
		</Wrapper>
	)
}

export default NumberInput
