import { InsuranceDto } from '../dto/InsuranceDto'

export type UpdateInsuranceParams = {
	payload: InsuranceDto
	carId?: string
	insuranceId?: string
}
