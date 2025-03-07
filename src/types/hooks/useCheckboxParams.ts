import { FieldValues } from 'react-hook-form'

import { CheckboxProps } from '../props/UI/CheckboxProps'

export type useCheckboxParams<T extends FieldValues> = Pick<
	CheckboxProps<T>,
	'name' | 'control' | 'rules'
>
