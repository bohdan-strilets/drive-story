import { Image } from '../types/Image'

export type ImageState = {
	image: Image | null

	setImage: (image: Image | null) => void
}
