import { Image } from '../types/Image'

export const isImage = (value: string | null | Image): value is Image => {
	return value !== null && typeof value === 'object' && 'selected' in value
}
