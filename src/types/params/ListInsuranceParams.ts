import { PaginationDto } from '@/types/dto/PaginationDto'

export interface ListInsuranceParams extends PaginationDto {
	pagination: PaginationDto
	carId: string
}
