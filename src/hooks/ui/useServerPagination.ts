import { useCallback } from 'react'

import { Params, Result } from '@/types/hooks/useServerPagination'

const useServerPagination = ({ meta, onPageChange }: Params): Result => {
	const currentPage = Number(meta.currentPage)
	const totalPages = Number(meta.totalPages)
	const itemsPerPage = Number(meta.itemsPerPage)
	const totalItems = Number(meta.totalItems)

	const goToPage = useCallback(
		(page: number) => {
			const p = Math.max(1, Math.min(page, totalPages))
			if (p !== currentPage) {
				onPageChange(p)
			}
		},
		[currentPage, totalPages, onPageChange]
	)

	const nextPage = useCallback(() => {
		if (currentPage < totalPages) {
			onPageChange(currentPage + 1)
		}
	}, [currentPage, totalPages, onPageChange])

	const prevPage = useCallback(() => {
		if (currentPage > 1) {
			onPageChange(currentPage - 1)
		}
	}, [currentPage, onPageChange])

	return {
		currentPage,
		totalPages,
		itemsPerPage,
		totalItems,
		itemCount: meta.itemCount,
		goToPage,
		nextPage,
		prevPage,
	}
}

export default useServerPagination
