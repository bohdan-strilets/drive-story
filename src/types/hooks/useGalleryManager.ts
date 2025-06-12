import { EntityType } from '../enums/EntityType'

export type Params = {
	entityType: EntityType
	entityId?: string
	openViewer: (imageUrl: string) => void
}
