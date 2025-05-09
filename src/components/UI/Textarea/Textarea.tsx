import { FieldValues, Path, useController } from 'react-hook-form'

import { TextareaProps } from '@/types/props/UI/TextareaProps'

import CharCounter from '../CharCounter'
import InputErrorMessage from '../InputErrorMessage'
import InputLabel from '../InputLabel'

import { Input, Wrapper } from './Textarea.styled'

const Textarea = <
	TFieldValues extends FieldValues,
	TName extends Path<TFieldValues>,
>({
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
	isShowCharCounter = false,
}: TextareaProps<TFieldValues, TName>) => {
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

	return (
		<Wrapper margin={margin} width={width}>
			<InputLabel label={label} required={required} />
			<div>
				<Input
					{...field}
					value={field.value || ''}
					placeholder={placeholder}
					height={height}
					padding={padding}
					aria-invalid={!!error}
					{...rules}
				/>
				{isShowCharCounter && (
					<CharCounter
						currentLength={currentLength}
						maxLength={rules?.maxLength ?? 0}
					/>
				)}
			</div>
			<InputErrorMessage error={error} />
		</Wrapper>
	)
}

export default Textarea
