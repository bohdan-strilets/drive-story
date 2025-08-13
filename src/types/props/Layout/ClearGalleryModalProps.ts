import { EntityType } from '@/types/enums/EntityType'
import { Image } from '@/types/types/Image'

export type ClearGalleryModalProps = {
	images: string | null | Image
	entityId: string
	EntityType: EntityType
}
