import { PaginationMeta } from '../types/PaginationMeta'

export type Params = {
	onPageChange: (page: number) => void
	meta?: PaginationMeta
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
