import { CarDetailsDto } from '../dto/CarDetailsDto'

export type UpdateCarParams = {
	payload: CarDetailsDto
	carId?: string
}
