import { FieldValues, useController } from 'react-hook-form'

import { formatPhoneNumber } from '@/utils/formatPhoneNumber'

import { TextInputProps } from '@/types/props/UI/TextInputProps'

import InputErrorMessage from '../InputErrorMessage'
import InputLabel from '../InputLabel'

import {
	Input,
	InputContainer,
	StyledIMaskInput,
	Wrapper,
} from './TextInput.styled'

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
	mask,
	unmask,
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

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		let newValue = e.target.value
		if (type === 'tel') {
			newValue = formatPhoneNumber(newValue)
		}
		field.onChange(newValue)
	}

	return (
		<Wrapper margin={margin} width={width}>
			<InputLabel label={label} required={required} />
			<InputContainer>
				{mask ? (
					<StyledIMaskInput
						mask={mask}
						value={field.value || ''}
						onAccept={(value: string) => field.onChange(value)}
						unmask={unmask}
						placeholder={placeholder}
						aria-invalid={!!error}
					/>
				) : (
					<Input
						{...field}
						value={field.value || ''}
						onChange={handleChange}
						placeholder={placeholder}
						type={type}
						height={height}
						padding={padding}
						aria-invalid={!!error}
					/>
				)}
				{children && children}
			</InputContainer>
			<InputErrorMessage error={error} />
		</Wrapper>
	)
}

export default TextInput
