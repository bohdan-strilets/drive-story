import { useEffect, useState } from 'react'

import { isImage } from '@/types/guards/isImage'
import { useGetImageParams } from '@/types/hooks/useGetImageParams'

export const useGetImage = ({ image, defaultImage }: useGetImageParams) => {
	const [selectedImage, setSelectedImage] = useState(defaultImage)

	useEffect(() => {
		if (image && isImage(image)) {
			setSelectedImage(image.selected)
		}
	}, [image])

	return selectedImage
}
