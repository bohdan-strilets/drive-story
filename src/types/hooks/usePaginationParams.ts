import { PaginationProps } from '../props/UI/PaginationProps'

export type usePaginationParams = {
	count: number
} & Pick<PaginationProps, 'images' | 'itemsPerPage' | 'handlePageChange'>
