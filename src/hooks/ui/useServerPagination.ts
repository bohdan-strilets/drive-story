import { useCallback } from 'react'

import { Params, Result } from '@/types/hooks/useServerPagination'

const useServerPagination = ({ meta, onPageChange }: Params): Result => {
	const currentPage = meta?.currentPage ?? 0
	const totalPages = meta?.totalPages ?? 0
	const itemsPerPage = meta?.itemsPerPage ?? 0
	const totalItems = meta?.totalItems ?? 0

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
		itemCount: meta?.itemCount ?? 0,
		goToPage,
		nextPage,
		prevPage,
	}
}

export default useServerPagination
