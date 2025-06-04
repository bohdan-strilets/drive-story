import { PaginationParams } from '@/types/params/PaginationParams'

export interface ListParams extends PaginationParams {
	pagination: PaginationParams
	carId: string
}
