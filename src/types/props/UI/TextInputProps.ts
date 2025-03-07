import { Control, FieldValues, Path, PathValue } from 'react-hook-form'

import { TextInputRules } from '@/types/types/TextInputRules'

export type TextInputProps<T extends FieldValues> = {
	control: Control<T>
	name: Path<T>
	type: 'text' | 'password' | 'email'
	label?: string
	rules?: TextInputRules
	defaultValue?: PathValue<T, Path<T>>
	placeholder?: string
	width?: string
	height?: string
	margin?: string
	padding?: string
}

export type WrapperProps = Pick<TextInputProps<FieldValues>, 'margin' | 'width'>

export type InputProps = Pick<TextInputProps<FieldValues>, 'height' | 'padding'>
