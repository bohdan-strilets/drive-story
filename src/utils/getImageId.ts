import { isImage } from '@/types/guards/isImage'
import { Image } from '@/types/types/Image'

export const getImageId = (
	photos?: string | Image | null
): string | undefined => {
	return photos && isImage(photos) ? photos._id : undefined
}
