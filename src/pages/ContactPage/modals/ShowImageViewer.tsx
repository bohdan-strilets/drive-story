import { FC } from 'react'

import ImageViewer from '@/components/Gallery/ImageViewer'

import { ShowImageViewerProps } from '@/types/props/PhoneBook/ShowImageViewerProps'

const ShowImageViewer: FC<ShowImageViewerProps> = ({
	showViewer,
	currentImage,
	closeViewer,
	photos,
}) => {
	return (
		showViewer && (
			<ImageViewer
				imageUrl={currentImage}
				closeViewer={closeViewer}
				imageUrls={photos}
			/>
		)
	)
}

export default ShowImageViewer
