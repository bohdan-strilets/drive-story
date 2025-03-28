import { useId } from 'react'
import { FieldValues, useController } from 'react-hook-form'

import { TextInputProps } from '@/types/props/UI/TextInputProps'

import InputErrorMessage from '../InputErrorMessage'
import InputLabel from '../InputLabel'

import { Input, InputContainer, Wrapper } from './TextInput.styled'

const TextInput = <T extends FieldValues>({
	control,
	name,
	type,
	label,
	children,
	rules,
	defaultValue,
	placeholder,
	width,
	height,
	margin,
	padding,
}: TextInputProps<T>) => {
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
		<Wrapper htmlFor={name} margin={margin} width={width}>
			<InputLabel label={label} required={required} />
			<InputContainer>
				<Input
					id={useId()}
					{...field}
					placeholder={placeholder}
					type={type}
					height={height}
					padding={padding}
					aria-invalid={!!error}
				/>
				{children && children}
			</InputContainer>
			<InputErrorMessage error={error} />
		</Wrapper>
	)
}

export default TextInput
