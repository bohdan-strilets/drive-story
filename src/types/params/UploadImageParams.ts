import { EntityType } from '../enums/EntityType'

export type UploadImageParams = {
	file: FormData
	entityId: string
	entityType: EntityType
}
