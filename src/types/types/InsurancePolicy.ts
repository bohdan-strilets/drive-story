import { InsuranceType } from '../enums/InsuranceType'

import { Image } from './Image'
import { PaymentStatus } from './PaymentStatus'

export type InsurancePolicy = {
	_id: string
	owner: string
	contactId?: string | null
	carId: string
	insurerName: string
	policyNumber: string
	startDate: Date
	endDate: Date
	insuranceType?: InsuranceType
	coverageAmount: number
	paymentStatus?: PaymentStatus
	photos: string | null | Image
	createdAt: Date
	updatedAt: Date
}
