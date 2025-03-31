export type PaginationProps = {
	images: string[]
	itemsPerPage: number
	handlePageChange: (pageData: string[]) => void
}
