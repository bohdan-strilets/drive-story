import { isImage } from '@/types/guards/isImage'
import { Image } from '@/types/types/Image'

export const getImageId = <T extends { photos: string | Image | null }>(
	entity?: T
): string | undefined => {
	const photosCandidate = entity?.photos as string | Image | null

	if (photosCandidate !== undefined && isImage(photosCandidate)) {
		return (photosCandidate as Image)._id
	}

	return undefined
}
