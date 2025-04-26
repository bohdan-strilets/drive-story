import { ReactNode } from 'react'

export type PropertyListItem = {
	id: string
	property: string
	value?: string | number | null | ReactNode
}

export type PropertyListProps = {
	elements: PropertyListItem[]
}
