import { useEffect, useMemo, useState } from 'react'

import { Params, Result } from '@/types/hooks/useClientPagination'

const useClientPagination = <T>({
	items,
	totalItems,
	itemsPerPage,
	handlePageChange,
}: Params<T>): Result => {
	const [currentPage, setCurrentPage] = useState(1)

	const totalPages = Math.ceil(totalItems / itemsPerPage)
	const lastItemIndex = currentPage * itemsPerPage
	const firstItemIndex = lastItemIndex - itemsPerPage

	const currentPageData = useMemo(() => {
		return items.slice(firstItemIndex, lastItemIndex)
	}, [items, firstItemIndex, lastItemIndex])

	useEffect(() => {
		if (items.length > 0) {
			setCurrentPage(1)
		}
	}, [items])

	useEffect(() => {
		if (items.length > 0) {
			handlePageChange(currentPageData)
		}
	}, [currentPage, currentPageData, handlePageChange, items])

	const goToPage = (pageNumber: number) => {
		setCurrentPage(Math.max(1, Math.min(pageNumber, totalPages)))
	}

	const nextPage = () => {
		setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages))
	}

	const prevPage = () => {
		setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))
	}

	return {
		currentPage,
		totalPages,
		goToPage,
		nextPage,
		prevPage,
	}
}

export default useClientPagination
