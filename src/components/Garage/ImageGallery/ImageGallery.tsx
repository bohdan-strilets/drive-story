import { FC } from 'react'

import Gallery from '@/components/Gallery'
import NoImageState from '@/components/Gallery/NoImageState'
import Title from '@/components/UI/Title'

import useResponsive from '@/hooks/ui/useResponsive'

import { isImage } from '@/types/guards/isImage'
import { ImageGalleryProps } from '@/types/props/Garage/ImageGalleryProps'

const ImageGallery: FC<ImageGalleryProps> = ({
	photos,
	imageActions,
	isActionLoading,
}) => {
	const { maxMobile } = useResponsive()

	if (!photos && !isImage(photos)) return <NoImageState />

	return (
		photos &&
		isImage(photos) && (
			<>
				<Title fontSize={maxMobile ? 20 : 28} textAlign="left" color="black">
					Gallery
				</Title>
				<Gallery
					images={photos.resources}
					overlayActions={imageActions}
					isProcessing={isActionLoading}
					itemsPerPage={maxMobile ? 3 : 6}
					itemHeight="240px"
					isShowOverlay={true}
				/>
			</>
		)
	)
}

export default ImageGallery
