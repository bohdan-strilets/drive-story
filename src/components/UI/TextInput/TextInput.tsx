import { FieldError, FieldValues } from 'react-hook-form'

import { TextInputProps } from '@/types/props/UI/TextInputProps'

import { ErrorMsg, Input, Label, Required, Wrapper } from './TextInput.styled'

const TextInput = <T extends FieldValues>({
	label,
	register,
	name,
	rules,
	placeholder,
	type,
	errors,
	width,
	height,
	margin,
	padding,
	defaultValue,
}: TextInputProps<T>) => {
	const error = errors?.[name] as FieldError | undefined
	const required = rules?.required

	return (
		<Wrapper margin={margin} width={width}>
			{label && (
				<Label>
					{label}
					{required && <Required>*</Required>}
				</Label>
			)}
			<Input
				{...register(name, rules)}
				placeholder={placeholder}
				type={type}
				height={height}
				padding={padding}
				defaultValue={defaultValue}
				aria-invalid={!!error}
			/>
			{error && <ErrorMsg role="alert">{error.message}</ErrorMsg>}
		</Wrapper>
	)
}

export default TextInput
