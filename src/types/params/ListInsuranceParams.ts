import { PaginationDto } from '@/types/params/PaginationParams'

export interface ListInsuranceParams extends PaginationDto {
	pagination: PaginationDto
	carId: string
}
