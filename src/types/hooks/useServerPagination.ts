import { PaginationMeta } from '../types/PaginationMeta'

export type Params = {
	meta: PaginationMeta
	onPageChange: (page: number) => void
}

export type Result = {
	currentPage: number
	totalPages: number
	itemsPerPage: number
	totalItems: number
	itemCount: number
	goToPage: (page: number) => void
	nextPage: () => void
	prevPage: () => void
}
