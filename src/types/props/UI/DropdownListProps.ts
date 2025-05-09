import { Control, FieldValues, Path, PathValue } from 'react-hook-form'

import { DropdownOption } from '@/types/types/DropdownOption'

export type Rules = {
	required?: boolean
	disabled?: boolean
}

export type DropdownListProps<
	TFieldValues extends FieldValues = FieldValues,
	TName extends Path<TFieldValues> = Path<TFieldValues>,
> = {
	control: Control<TFieldValues>
	name: TName
	options: DropdownOption[]
	placeholder: string
	label?: string
	defaultValue?: PathValue<TFieldValues, TName>
	rules?: Rules
	width?: string
	margin?: string
	listHeight?: number
	listPosition?: 'top' | 'bottom'
}

export type WrapperProps = Pick<DropdownListProps, 'width' | 'margin'>

export type ArrowIconProps = { isOpen: boolean }

export type ListProps = Pick<DropdownListProps, 'listHeight' | 'listPosition'>
