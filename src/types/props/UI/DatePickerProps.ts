import { Control, FieldValues, Path, PathValue } from 'react-hook-form'

export type Rules = {
	minDate: Date
	maxDate: Date
	required?: boolean
	disabled?: boolean
}

export type DatePickerProps<
	TFieldValues extends FieldValues = FieldValues,
	TName extends Path<TFieldValues> = Path<TFieldValues>,
> = {
	control: Control<TFieldValues>
	name: TName
	placeholder: string
	label?: string
	defaultValue?: PathValue<TFieldValues, TName>
	rules: Rules
	width?: string
	margin?: string
}

export type WrapperProps = Pick<DatePickerProps, 'width' | 'margin'>
