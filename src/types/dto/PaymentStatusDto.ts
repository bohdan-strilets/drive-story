import { InstallmentsCount } from '../enums/InstallmentsCount'

export type PaymentStatusDto = {
	isPaid: boolean
	installmentsCount?: InstallmentsCount
	installmentCost?: number
	totalInstallmentsSum?: number
	paymentDates?: Date[]
}
