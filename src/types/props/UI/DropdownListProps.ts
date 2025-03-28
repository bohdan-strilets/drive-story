import { Control, FieldValues, Path, PathValue } from 'react-hook-form'

import { DropdownOption } from '@/types/types/DropdownOption'

export type Rules = {
	required: boolean
	disabled: boolean
}

export type DropdownListProps<T extends FieldValues> = {
	control: Control<T>
	options: DropdownOption[]
	name: Path<T>
	placeholder: string
	label?: string
	defaultValue?: PathValue<T, Path<T>>
	rules?: Rules
	width?: string
	margin?: string
	listHeight?: number
	listPosition?: 'top' | 'bottom'
}

export type WrapperProps = Pick<
	DropdownListProps<FieldValues>,
	'width' | 'margin'
>

export type ArrowIconProps = { isOpen: boolean }

export type ListProps = Pick<
	DropdownListProps<FieldValues>,
	'listHeight' | 'listPosition'
>
