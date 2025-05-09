import { Control, FieldValues, Path, PathValue } from 'react-hook-form'

export type Rules = {
	required?: boolean
	min?: number
	max?: number
	disabled?: boolean
}

export type RangeInputProps<
	TFieldValues extends FieldValues = FieldValues,
	TName extends Path<TFieldValues> = Path<TFieldValues>,
> = {
	control: Control<TFieldValues>
	name: TName
	label: string
	rules?: Rules
	defaultValue?: PathValue<TFieldValues, TName>
	min?: number
	max?: number
	width?: string
	margin?: string
}

export type WrapperProps = Pick<RangeInputProps, 'width' | 'margin'>

export type FilledTrackProps = { percentage: number }
