import { Control, FieldValues, Path, PathValue } from 'react-hook-form'

export type Rules = {
	min: number
	max: number
	step?: number
	required?: boolean
	disabled?: boolean
}

export type NumberInputProps<T extends FieldValues> = {
	control: Control<T>
	name: Path<T>
	rules: Rules
	label?: string
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
