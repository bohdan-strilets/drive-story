import { Control, FieldValues, Path, PathValue } from 'react-hook-form'

export type Rules = {
	min: number
	max: number
	step?: number
	required?: boolean
	disabled?: boolean
}

export type NumberInputProps<
	TFieldValues extends FieldValues = FieldValues,
	TName extends Path<TFieldValues> = Path<TFieldValues>,
> = {
	control: Control<TFieldValues>
	name: TName
	rules: Rules
	label?: string
	defaultValue?: PathValue<TFieldValues, TName>
	placeholder?: string
	width?: string
	height?: string
	margin?: string
	padding?: string
}

export type WrapperProps = Pick<NumberInputProps, 'margin' | 'width'>

export type InputProps = Pick<NumberInputProps, 'height' | 'padding'>
