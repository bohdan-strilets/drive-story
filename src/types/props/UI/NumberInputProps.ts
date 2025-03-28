import { Control, FieldValues, Path, PathValue } from 'react-hook-form'

export type Rules = {
	required?: boolean
	min?: number
	max?: number
	disabled?: boolean
}

export type NumberInputProps<T extends FieldValues> = {
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
}

export type WrapperProps = Pick<
	NumberInputProps<FieldValues>,
	'margin' | 'width'
>

export type InputProps = Pick<
	NumberInputProps<FieldValues>,
	'height' | 'padding'
>
