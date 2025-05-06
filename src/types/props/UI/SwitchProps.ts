import { Control, FieldValues, Path, PathValue } from 'react-hook-form'

export type Rules = {
	required?: boolean
	disabled?: boolean
}

export type SwitchProps<T extends FieldValues> = {
	control: Control<T>
	name: Path<T>
	label?: string
	rules?: Rules
	defaultValue?: PathValue<T, Path<T>>
	margin?: string
}

export type WrapperProps = Pick<SwitchProps<FieldValues>, 'margin'>

export type TrackProps = { checked: boolean }
