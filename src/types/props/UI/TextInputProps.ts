import { ReactNode } from 'react'
import { Control, FieldValues, Path, PathValue } from 'react-hook-form'

export type Rules = {
	min?: number
	max?: number
	minLength?: number
	maxLength?: number
	required?: boolean
	disabled?: boolean
}

export type TextInputProps<
	TFieldValues extends FieldValues = FieldValues,
	TName extends Path<TFieldValues> = Path<TFieldValues>,
> = {
	control: Control<TFieldValues>
	name: TName
	type: 'text' | 'password' | 'email' | 'tel'
	label?: string
	children?: ReactNode
	rules?: Rules
	defaultValue?: PathValue<TFieldValues, TName>
	placeholder?: string
	width?: string
	height?: string
	margin?: string
	padding?: string
	mask?: string
	unmask?: boolean
	isShowCharCounter?: boolean
}

export type WrapperProps = Pick<TextInputProps, 'margin' | 'width'>

export type InputProps = Pick<TextInputProps, 'height' | 'padding'>
