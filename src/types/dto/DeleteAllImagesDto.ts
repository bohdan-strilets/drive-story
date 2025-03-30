import { EntityType } from '../enums/EntityType'

export type DeleteAllImagesDto = {
	entityId: string
	imageId: string
	entityType: EntityType
}
