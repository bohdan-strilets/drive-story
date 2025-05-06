import { InstallmentsCount } from '../enums/InstallmentsCount'
import { InsuranceType } from '../enums/InsuranceType'

export type PaymentStatusDto = {
	isPaid: boolean
	installmentsCount?: InstallmentsCount
	installmentCost?: number
	totalInstallmentsSum?: number
	paymentDates?: Date[]
}

export type InsuranceDto = {
	insurerName: string
	policyNumber: string
	startDate: Date
	endDate: Date
	insuranceType?: InsuranceType
	coverageAmount: number
	paymentStatus?: PaymentStatusDto
}
