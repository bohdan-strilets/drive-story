import { ReactNode } from 'react'
import { Control, FieldValues, Path, PathValue } from 'react-hook-form'

export type Rules<T> = {
	isChecked?: PathValue<T, Path<T>>
	required?: boolean
	disabled?: boolean
	readOnly?: boolean
}

export type CheckboxProps<T extends FieldValues> = {
	children: ReactNode | string
	control: Control<T>
	name: Path<T>
	rules?: Rules<T>
	margin?: string
}

export type CustomCheckboxProps = Pick<
	Rules<FieldValues>,
	'isChecked' | 'disabled'
> & {
	children?: ReactNode | string
}

export type WrapperProps = {
	margin?: string
}
