import { nanoid } from 'nanoid'

import { DropdownOption } from '@/types/types/DropdownOption'

export const formatLabel = (input: string): string => {
	const withSpaces = input.replace(/-/g, ' ').trim()
	return withSpaces.charAt(0).toUpperCase() + withSpaces.slice(1)
}

export const formatValue = <T extends string>(input: string): T => {
	return input
		.replace(/\s+/g, '-')
		.replace(/_+/g, '-')
		.toLowerCase()
		.trim() as T
}

export function generateDropdownOptions(labels: string[]): DropdownOption[]
export function generateDropdownOptions(
	labels: string[],
	values: string[]
): DropdownOption[]
export function generateDropdownOptions(
	labels: string[],
	values?: string[]
): DropdownOption[] {
	return labels.map((label, index) => ({
		id: nanoid(),
		label: formatLabel(label),
		value: values ? (values[index] ?? formatValue(label)) : formatValue(label),
	}))
}
