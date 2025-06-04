import { InsuranceType } from '../enums/InsuranceType'
import { NumberRates } from '../enums/NumberRates'

import { Contact } from './Contact'
import { Image } from './Image'

export type PaymentStatus = {
	_id: string
	isPaid: boolean
	installmentsCount?: NumberRates
	totalInstallmentsSum?: number
	createdAt: Date
	updatedAt: Date
}

export type Insurance = {
	_id: string
	owner: string
	contactId: string | null | Contact
	carId: string
	insurerName: string
	policyNumber: string
	startDate: Date
	endDate: Date
	insuranceType: InsuranceType
	coverageAmount: number
	paymentStatus: PaymentStatus
	photos: string | null | Image
	createdAt: Date
	updatedAt: Date
}
