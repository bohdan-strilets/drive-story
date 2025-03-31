import { AnimatePresence } from 'motion/react'
import { FC, useEffect, useState } from 'react'

import ImageBox from '@/components/UI/ImageBox'

import { GalleryProps } from '@/types/props/Gallery/GalleryProps'

import { fadeSlide } from '@/animations/fadeSlide'

import Pagination from '../UI/Pagination'

import { Button, Item, List } from './Gallery.styled'

const Gallery: FC<GalleryProps> = ({ images = [] }) => {
	const [currentPageData, setCurrentPageData] = useState<string[]>([])

	const itemsPerPage = 6

	const handlePageChange = (pageData: string[]) => {
		setCurrentPageData(pageData)
	}

	useEffect(() => {
		if (images.length > 0) {
			const initialPageData = images.slice(0, itemsPerPage)
			handlePageChange(initialPageData)
		}
	}, [images])

	return (
		images.length !== 0 && (
			<>
				<AnimatePresence>
					<List key={currentPageData.join('-')}>
						{currentPageData.map((imageUrl, index) => (
							<Item
								key={index}
								{...fadeSlide(0, -30, index * 0.1, 0.2, 'easeOut', false)}
							>
								<Button type="button">
									<ImageBox imageUrl={imageUrl} width="100%" height="100%" />
								</Button>
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
