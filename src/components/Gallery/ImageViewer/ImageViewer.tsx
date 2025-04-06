import { FC } from 'react'
import { createPortal } from 'react-dom'
import { SlSizeActual } from 'react-icons/sl'

import Backdrop from '@/components/UI/Backdrop'

import { defaultImages } from '@/utils/defaultImages'

import { ImageViewerProps } from '@/types/props/Gallery/ImageViewerProps'

import { floating } from '@/animations/floating'

import { Button, Image } from './ImageViewer.styled'

const imageViewerPortal = document.getElementById(
	'image-viewer'
) as HTMLDivElement

const ImageViewer: FC<ImageViewerProps> = ({ imageUrl, closeViewer }) => {
	const url = imageUrl ? imageUrl : defaultImages.photo

	return createPortal(
		<Backdrop onClose={closeViewer}>
			<Button type="button" onClick={closeViewer}>
				<SlSizeActual />
			</Button>
			<Image
				src={url}
				alt="Selected image"
				width="100%"
				height="100%"
				{...floating()}
			/>
		</Backdrop>,
		imageViewerPortal
	)
}

export default ImageViewer
