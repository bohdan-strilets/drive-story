import { PaginationMeta } from './PaginationMeta'

export type PaginatedResponse<T> = {
	data: T[]
	meta: PaginationMeta
}
