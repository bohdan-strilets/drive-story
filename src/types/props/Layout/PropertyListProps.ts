export type PropertyListItem = {
	id: string
	property: string
	value?: string | number | null
}

export type PropertyListProps = {
	elements: PropertyListItem[]
}
