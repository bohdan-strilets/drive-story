export type Params<T> = {
	items: T[]
	totalItems: number
	itemsPerPage: number
	handlePageChange: (pageData: T[]) => void
}

export type Result = {
	currentPage: number
	totalPages: number
	goToPage: (page: number) => void
	nextPage: () => void
	prevPage: () => void
}
