import { FieldValues } from 'react-hook-form'

import { TextInputProps } from './TextInputProps'

export type PasswordInputProps<T extends FieldValues> = Pick<
	TextInputProps<T>,
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
>
