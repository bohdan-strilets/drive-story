import { Insurance, PaymentStatus } from '../types/Insurance'

export type PaymentStatusDto = Pick<
	PaymentStatus,
	| 'isPaid'
	| 'installmentsCount'
	| 'installmentCost'
	| 'paymentDates'
	| 'totalInstallmentsSum'
>

export type InsuranceDto = Pick<
	Insurance,
	| 'insurerName'
	| 'policyNumber'
	| 'startDate'
	| 'endDate'
	| 'insuranceType'
	| 'coverageAmount'
> & {
	paymentStatus: PaymentStatusDto
}
