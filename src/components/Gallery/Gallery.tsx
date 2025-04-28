import { AnimatePresence } from 'motion/react'
import { FC, useEffect, useState } from 'react'

import ImageBox from '@/components/UI/ImageBox'

import { GalleryProps } from '@/types/props/Gallery/GalleryProps'

import { fadeSlide } from '@/animations/fadeSlide'

import Pagination from '../UI/Pagination'

import { ImageContainer, Item, List } from './Gallery.styled'
import OverlayActions from './OverlayActions'

const Gallery: FC<GalleryProps> = ({
	images = [],
	isOverlay = false,
	overlayActions,
	isActionLoading,
	itemsPerPage = 6,
	itemHeight = 'auto',
}) => {
	const [currentPageData, setCurrentPageData] = useState<string[]>([])

	const handlePageChange = (pageData: string[]) => {
		setCurrentPageData(pageData)
	}

	useEffect(() => {
		if (images.length > 0) {
			const initialPageData = images.slice(0, itemsPerPage)
			handlePageChange(initialPageData)
		}
	}, [images, itemsPerPage])

	return (
		images.length !== 0 && (
			<>
				<AnimatePresence>
					<List key={currentPageData.join('-')}>
						{currentPageData.map((imageUrl, index) => (
							<Item
								key={index}
								itemHeight={itemHeight}
								{...fadeSlide(0, -30, index * 0.1, 0.2, 'easeOut', false)}
							>
								<ImageContainer>
									<ImageBox imageUrl={imageUrl} width="100%" height="100%" />
									{isOverlay && (
										<OverlayActions
											imageUrl={imageUrl}
											overlayActions={overlayActions}
											isActionLoading={isActionLoading}
										/>
									)}
								</ImageContainer>
							</Item>
						))}
					</List>
				</AnimatePresence>
				{images.length > itemsPerPage && (
					<Pagination
						images={images}
						itemsPerPage={itemsPerPage}
						handlePageChange={handlePageChange}
					/>
				)}
			</>
		)
	)
}

export default Gallery
