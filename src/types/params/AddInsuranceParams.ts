import { InsuranceDto } from '../dto/InsuranceDto'

export type AddInsuranceParams = {
	payload: InsuranceDto
	carId?: string
}
