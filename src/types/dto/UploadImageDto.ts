import { EntityType } from '../enums/EntityType'

export type UploadImageDto = {
	file: FormData
	entityId: string
	entityType: EntityType
}
