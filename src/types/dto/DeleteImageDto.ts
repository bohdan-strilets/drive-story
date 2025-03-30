import { EntityType } from '../enums/EntityType'

export type DeleteImageDto = {
	entityId: string
	entityType: EntityType
	publicId: string
}
