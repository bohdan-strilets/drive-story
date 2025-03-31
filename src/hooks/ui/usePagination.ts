import { useEffect, useMemo, useState } from 'react'

import { usePaginationParams } from '@/types/hooks/usePaginationParams'

const usePagination = ({
	itemsPerPage,
	count,
	handlePageChange,
	images,
}: usePaginationParams) => {
	const [currentPage, setCurrentPage] = useState(1)

	const totalPages = Math.ceil(count / itemsPerPage)
	const lastItemIndex = currentPage * itemsPerPage
	const firstItemIndex = lastItemIndex - itemsPerPage

	const currentPageData = useMemo(() => {
		return images.slice(firstItemIndex, lastItemIndex)
	}, [images, firstItemIndex, lastItemIndex])

	useEffect(() => {
		if (images.length > 0) {
			setCurrentPage(1)
		}
	}, [images])

	useEffect(() => {
		if (images.length > 0) {
			handlePageChange(currentPageData)
		}
	}, [currentPage, currentPageData, handlePageChange, images])

	const paginationGaps = useMemo(() => {
		const showBefore = currentPage > 3
		const showAfter = currentPage < totalPages - 2

		let paginationGroup
		if (totalPages <= 5) {
			paginationGroup = Array.from(
				{ length: totalPages },
				(_, i) => i + 1
			).slice(1, -1)
		} else if (!showBefore) {
			paginationGroup = [2, 3, 4]
		} else if (!showAfter) {
			paginationGroup = [totalPages - 3, totalPages - 2, totalPages - 1]
		} else {
			paginationGroup = [currentPage - 1, currentPage, currentPage + 1]
		}

		return {
			before: showBefore,
			after: showAfter,
			paginationGroup,
		}
	}, [currentPage, totalPages])

	const changePageByDirection = (isNext: boolean) => {
		setCurrentPage((prevPage) =>
			isNext ? Math.min(prevPage + 1, totalPages) : Math.max(prevPage - 1, 1)
		)
	}

	const goToPage = (pageNumber: number) => {
		setCurrentPage(Math.max(1, Math.min(pageNumber, totalPages)))
	}

	return {
		totalPages,
		nextPage: () => changePageByDirection(true),
		prevPage: () => changePageByDirection(false),
		goToPage,
		firstItemIndex,
		lastItemIndex,
		currentPage,
		paginationGaps,
	}
}

export default usePagination
