export type PaginationProps = {
	goToPage: (page: number) => void
	nextPage: () => void
	prevPage: () => void
	currentPage: number
	totalPages: number
}
