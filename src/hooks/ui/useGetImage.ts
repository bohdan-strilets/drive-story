import { useEffect, useRef } from 'react'

import { isImage } from '@/types/guards/isImage'
import { useGetImageParams } from '@/types/hooks/useGetImageParams'

export const useGetImage = ({ image, defaultImage }: useGetImageParams) => {
	const imageRef = useRef<string>(defaultImage)

	useEffect(() => {
		if (image && isImage(image)) {
			imageRef.current = image.selected
		}
	}, [image])

	return imageRef
}
