import { EntityType } from '../enums/EntityType'

export type DeleteImageParams = {
	entityId: string
	entityType: EntityType
	publicId: string
}
