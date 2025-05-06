import { InsuranceDto } from './InsuranceDto'

export type UpdateInsuranceDto = {
	dto: InsuranceDto
	carId: string
	insuranceId: string
}
