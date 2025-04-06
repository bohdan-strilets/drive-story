import { cloudinaryPublicIdRegex } from '@/regex/cloudinaryPublicIdRegex'

export const extractPublicId = (imageUrl: string): string | null => {
	const match = imageUrl.match(cloudinaryPublicIdRegex)
	return match ? match[1] : null
}
