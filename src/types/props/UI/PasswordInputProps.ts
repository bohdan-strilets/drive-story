import { FieldValues, Path } from 'react-hook-form'

import { TextInputProps } from './TextInputProps'

export type PasswordInputProps<
	TFieldValues extends FieldValues = FieldValues,
	TName extends Path<TFieldValues> = Path<TFieldValues>,
> = Pick<
	TextInputProps<TFieldValues, TName>,
	| 'control'
	| 'name'
	| 'label'
	| 'rules'
	| 'defaultValue'
	| 'placeholder'
	| 'width'
	| 'height'
	| 'margin'
	| 'padding'
	| 'isShowCharCounter'
>
