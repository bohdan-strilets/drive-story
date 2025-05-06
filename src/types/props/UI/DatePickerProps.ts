import { Control, FieldValues, Path, PathValue } from 'react-hook-form'

export type Rules = {
	minDate: Date
	maxDate: Date
	required?: boolean
	disabled?: boolean
}

export type DatePickerProps<T extends FieldValues> = {
	control: Control<T>
	name: Path<T>
	placeholder: string
	label?: string
	defaultValue?: PathValue<T, Path<T>>
	rules: Rules
	width?: string
	margin?: string
}

export type WrapperProps = Pick<
	DatePickerProps<FieldValues>,
	'width' | 'margin'
>
