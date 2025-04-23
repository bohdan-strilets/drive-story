import { Control, FieldValues, Path, PathValue } from 'react-hook-form'

export type Rules = {
	required?: boolean
	min?: number
	max?: number
	disabled?: boolean
}

export type RangeInputProps<T extends FieldValues> = {
	control: Control<T>
	name: Path<T>
	label: string
	rules?: Rules
	defaultValue?: PathValue<T, Path<T>>
	min?: number
	max?: number
	width?: string
	margin?: string
}

export type WrapperProps = Pick<
	RangeInputProps<FieldValues>,
	'width' | 'margin'
>

export type FilledTrackProps = { percentage: number }
