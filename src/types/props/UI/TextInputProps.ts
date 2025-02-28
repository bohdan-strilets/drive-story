import {
	FieldErrors,
	FieldValues,
	Path,
	UseFormRegister,
} from 'react-hook-form'

import { TextInputRules } from '@/types/types/TextInputRules'

export type TextInputProps<T extends FieldValues> = {
	register: UseFormRegister<T>
	name: Path<T>
	type: 'text' | 'password' | 'email'
	rules?: TextInputRules
	label?: string
	placeholder?: string
	errors?: FieldErrors<T>
	width?: string
	height?: string
	margin?: string
	padding?: string
	defaultValue?: string
}

export type WrapperProps = Pick<TextInputProps<FieldValues>, 'margin' | 'width'>

export type InputProps = Pick<TextInputProps<FieldValues>, 'height' | 'padding'>
