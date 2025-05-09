import { InsuranceType } from '../enums/InsuranceType'

import { Image } from './Image'

export type PaymentStatus = {
	_id: string
	isPaid: boolean
	installmentsCount?: number
	installmentCost?: number
	totalInstallmentsSum?: number
	paymentDates?: Date[]
	createdAt: Date
	updatedAt: Date
}

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
