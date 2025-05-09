import { FieldValues, Path } from 'react-hook-form'

import { CheckboxProps } from '../props/UI/CheckboxProps'

export type Params<
	TFieldValues extends FieldValues,
	TName extends Path<TFieldValues>,
> = Pick<CheckboxProps<TFieldValues, TName>, 'name' | 'control' | 'rules'>
