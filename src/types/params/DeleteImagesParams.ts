import { EntityType } from '../enums/EntityType'

export type DeleteImagesParams = {
	entityId?: string
	imageId?: string
	entityType: EntityType
}
