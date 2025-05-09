import { ReactNode } from 'react'
import { Control, FieldValues, Path, PathValue } from 'react-hook-form'

export type Rules<
	TFieldValues extends FieldValues,
	TName extends Path<TFieldValues>,
> = {
	isChecked?: PathValue<TFieldValues, TName>
	required?: boolean
	disabled?: boolean
	readOnly?: boolean
}

export type CheckboxProps<
	TFieldValues extends FieldValues = FieldValues,
	TName extends Path<TFieldValues> = Path<TFieldValues>,
> = {
	control: Control<TFieldValues>
	name: TName
	children: ReactNode | string
	rules?: Rules<TFieldValues, TName>
	margin?: string
}

export type CustomCheckboxProps = Pick<
	Rules<FieldValues, Path<FieldValues>>,
	'isChecked' | 'disabled'
> & {
	children?: ReactNode | string
}

export type WrapperProps = {
	margin?: string
}
