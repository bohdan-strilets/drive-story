import { isImage } from '@/types/guards/isImage'
import { Image } from '@/types/types/Image'

export const getImageResources = (photos?: string | Image | null): string[] => {
	return photos && isImage(photos) ? photos.resources : []
}
