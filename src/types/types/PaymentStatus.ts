import { InstallmentsCount } from '../enums/InstallmentsCount'

export type PaymentStatus = {
	_id: string
	isPaid: boolean
	installmentsCount?: InstallmentsCount
	installmentCost?: number
	totalInstallmentsSum?: number
	paymentDates?: Date[]
	createdAt: Date
	updatedAt: Date
}
