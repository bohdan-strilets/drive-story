import { AnimatePresence } from 'motion/react'
import { FC, useEffect, useState } from 'react'

import ImageBox from '@/components/UI/ImageBox'

import useClientPagination from '@/hooks/ui/useClientPagination'

import { GalleryProps } from '@/types/props/Gallery/GalleryProps'

import { fadeSlide } from '@/animations/fadeSlide'

import Pagination from '../UI/Pagination'

import { ImageContainer, Item, List } from './Gallery.styled'
import OverlayActions from './OverlayActions'

const Gallery: FC<GalleryProps> = ({
	images = [],
	isShowOverlay = false,
	overlayActions,
	isProcessing,
	itemsPerPage = 6,
	itemHeight = 'auto',
}) => {
	const [currentPageData, setCurrentPageData] = useState<string[]>([])

	const handlePageChange = (pageData: string[]) => {
		setCurrentPageData(pageData)
	}

	const { currentPage, goToPage, nextPage, prevPage, totalPages } =
		useClientPagination<string>({
			items: images,
			totalItems: images.length,
			itemsPerPage,
			handlePageChange,
		})

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
									{isShowOverlay && (
										<OverlayActions
											imageUrl={imageUrl}
											overlayActions={overlayActions}
											isProcessing={isProcessing}
										/>
									)}
								</ImageContainer>
							</Item>
						))}
					</List>
				</AnimatePresence>
				{images.length > itemsPerPage && (
					<Pagination
						goToPage={goToPage}
						nextPage={nextPage}
						prevPage={prevPage}
						totalPages={totalPages}
						currentPage={currentPage}
					/>
				)}
			</>
		)
	)
}

export default Gallery
