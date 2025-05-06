import { InsuranceType } from '../enums/InsuranceType'

import { PaymentStatusDto } from './PaymentStatusDto'

export type InsuranceDto = {
	insurerName: string
	policyNumber: string
	startDate: Date
	endDate: Date
	insuranceType?: InsuranceType
	coverageAmount: number
	paymentStatus?: PaymentStatusDto
}
