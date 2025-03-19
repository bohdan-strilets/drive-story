import { EntityType } from '../enums/EntityType'

export type Image = {
	_id: string
	owner: string
	entityId: string
	entityType: EntityType
	default: string
	resources: string[]
	selected: string
	createdAt: Date
	updatedAt: Date
}
