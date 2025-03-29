import { ReactNode } from 'react'
import { Control, FieldValues, Path, PathValue } from 'react-hook-form'

export type Rules = {
	required?: boolean
	min?: number
	max?: number
	minLength?: number
	maxLength?: number
	disabled?: boolean
}

export type TextInputProps<T extends FieldValues> = {
	control: Control<T>
	name: Path<T>
	type: 'text' | 'password' | 'email' | 'tel'
	label?: string
	children?: ReactNode
	rules?: Rules
	defaultValue?: PathValue<T, Path<T>>
	placeholder?: string
	width?: string
	height?: string
	margin?: string
	padding?: string
	mask?: string
	unmask?: boolean
}

export type WrapperProps = Pick<TextInputProps<FieldValues>, 'margin' | 'width'>

export type InputProps = Pick<TextInputProps<FieldValues>, 'height' | 'padding'>
