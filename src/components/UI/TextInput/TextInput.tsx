import { FieldValues, Path, useController } from 'react-hook-form'

import { formatPhoneNumber } from '@/utils/formatPhoneNumber'

import { TextInputProps } from '@/types/props/UI/TextInputProps'

import CharCounter from '../CharCounter'
import InputErrorMessage from '../InputErrorMessage'
import InputLabel from '../InputLabel'

import {
	Input,
	InputContainer,
	StyledIMaskInput,
	Wrapper,
} from './TextInput.styled'

const TextInput = <
	TFieldValues extends FieldValues,
	TName extends Path<TFieldValues>,
>({
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
	isShowCharCounter = false,
	onChange,
}: TextInputProps<TFieldValues, TName>) => {
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
	const inputValue = (field.value ?? '') as string
	const currentLength = inputValue.length

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		let newValue = e.target.value

		if (type === 'tel') {
			newValue = formatPhoneNumber(newValue)
		}

		field.onChange(newValue)
		if (onChange) onChange(e)
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
						{...rules}
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
						{...rules}
					/>
				)}
				{children && children}
				{isShowCharCounter && (
					<CharCounter
						currentLength={currentLength}
						maxLength={rules?.maxLength ?? 0}
					/>
				)}
			</InputContainer>
			<InputErrorMessage error={error} />
		</Wrapper>
	)
}

export default TextInput
