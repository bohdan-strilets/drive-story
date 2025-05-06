import { Control, FieldValues, Path, PathValue } from 'react-hook-form'

export type Rules = {
	required?: boolean
	minLength?: number
	maxLength?: number
	disabled?: boolean
}

export type TextareaProps<T extends FieldValues> = {
	control: Control<T>
	name: Path<T>
	label?: string
	rules?: Rules
	defaultValue?: PathValue<T, Path<T>>
	placeholder?: string
	width?: string
	height?: string
	margin?: string
	padding?: string
	isShowCharCounter?: boolean
}

export type WrapperProps = Pick<TextareaProps<FieldValues>, 'margin' | 'width'>

export type InputProps = Pick<TextareaProps<FieldValues>, 'height' | 'padding'>
