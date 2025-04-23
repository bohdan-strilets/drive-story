import { FieldValues, useController } from 'react-hook-form'

import { TextareaProps } from '@/types/props/UI/TextareaProps'

import InputErrorMessage from '../InputErrorMessage'
import InputLabel from '../InputLabel'

import { Input, Wrapper } from './Textarea.styled'

const Textarea = <T extends FieldValues>({
	control,
	name,
	label,
	rules,
	defaultValue,
	placeholder,
	width = '100%',
	height = '150px',
	margin,
	padding = '10px',
}: TextareaProps<T>) => {
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
				value={field.value || ''}
				placeholder={placeholder}
				height={height}
				padding={padding}
				aria-invalid={!!error}
			/>
			<InputErrorMessage error={error} />
		</Wrapper>
	)
}

export default Textarea
