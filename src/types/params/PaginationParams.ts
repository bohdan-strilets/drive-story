import { SearchQueryParams } from './SearchQueryParams'

export interface PaginationParams extends SearchQueryParams {
	page: number
	limit: number
}
