import { Insurance, PaymentStatus } from '../types/Insurance'

export type PaymentStatusDto = Pick<
	PaymentStatus,
	'isPaid' | 'installmentsCount' | 'totalInstallmentsSum'
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
