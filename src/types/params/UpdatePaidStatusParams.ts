import { PaidStatusDto } from '../dto/PaidStatusDto'

export type UpdatePaidStatusParams = {
	payload: PaidStatusDto
	carId?: string
	insuranceId?: string
}
