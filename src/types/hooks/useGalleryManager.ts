import { ReactNode } from 'react'

import { EntityType } from '../enums/EntityType'

export type Params = {
	entityType: EntityType
	entityId?: string
}

export type Action = {
	id: string
	callback: (imageUrl: string) => void
	icon: ReactNode
	label: string
}
