import { PaginationParams } from '@/types/params/PaginationParams'

export interface ListInspectionParams extends PaginationParams {
	pagination: PaginationParams
	carId: string
}
