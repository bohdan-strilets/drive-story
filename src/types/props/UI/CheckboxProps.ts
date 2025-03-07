import { ReactNode } from 'react'
import { Control, FieldErrors, FieldValues, Path } from 'react-hook-form'

import { CheckboxRules } from '@/types/types/CheckboxRules'

export type CheckboxProps<T extends FieldValues> = {
	children: ReactNode | string
	control: Control<T>
	name: Path<T>
	rules?: CheckboxRules<T>
	errors?: FieldErrors<T>
	margin?: string
}

export type CustomCheckboxProps = Pick<
	CheckboxRules<FieldValues>,
	'isChecked' | 'disabled'
> & {
	children?: ReactNode | string
}

export type WrapperProps = {
	margin?: string
}
