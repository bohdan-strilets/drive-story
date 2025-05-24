import { FC } from 'react'

import Gallery from '@/components/Gallery'
import DecorativeLine from '@/components/UI/DecorativeLine'
import Title from '@/components/UI/Title'

import useResponsive from '@/hooks/ui/useResponsive'

import { isImage } from '@/types/guards/isImage'
import { ImageGalleryProps } from '@/types/props/Inspection/ImageGalleryProps'

const ImageGallery: FC<ImageGalleryProps> = ({
	photos,
	imageActions,
	isActionLoading,
}) => {
	const { maxMobile } = useResponsive()

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
					isActionLoading={isActionLoading}
					itemsPerPage={maxMobile ? 3 : 6}
					itemHeight="240px"
					isOverlay={true}
				/>
				<DecorativeLine color="gray" type="dashed" margin="20px 0" />
			</>
		)
	)
}

export default ImageGallery
