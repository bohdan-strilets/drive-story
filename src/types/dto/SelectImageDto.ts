import { EntityType } from '../enums/EntityType'

export type SelectImageDto = {
	entityId: string
	entityType: EntityType
	publicId: string
}
