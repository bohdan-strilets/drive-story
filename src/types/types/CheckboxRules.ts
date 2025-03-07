import { Path, PathValue } from 'react-hook-form'

export type CheckboxRules<T> = {
	isChecked?: PathValue<T, Path<T>>
	required?: boolean
	disabled?: boolean
	readOnly?: boolean
}
