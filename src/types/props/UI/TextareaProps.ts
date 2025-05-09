import { Control, FieldValues, Path, PathValue } from 'react-hook-form'

export type Rules = {
	required?: boolean
	minLength?: number
	maxLength?: number
	disabled?: boolean
}

export type TextareaProps<
	TFieldValues extends FieldValues = FieldValues,
	TName extends Path<TFieldValues> = Path<TFieldValues>,
> = {
	control: Control<TFieldValues>
	name: TName
	label?: string
	rules?: Rules
	defaultValue?: PathValue<TFieldValues, TName>
	placeholder?: string
	width?: string
	height?: string
	margin?: string
	padding?: string
	isShowCharCounter?: boolean
}

export type WrapperProps = Pick<TextareaProps, 'margin' | 'width'>

export type InputProps = Pick<TextareaProps, 'height' | 'padding'>
