import { PaginationParams } from '@/types/params/PaginationParams'

export interface ListInsuranceParams extends PaginationParams {
	pagination: PaginationParams
	carId: string
}
