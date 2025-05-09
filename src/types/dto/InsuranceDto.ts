import { InsurancePolicy, PaymentStatus } from '../types/InsurancePolicy'

export type PaymentStatusDto = Pick<
	PaymentStatus,
	| 'isPaid'
	| 'installmentsCount'
	| 'installmentCost'
	| 'paymentDates'
	| 'totalInstallmentsSum'
>

export type InsuranceDto = Pick<
	InsurancePolicy,
	| 'insurerName'
	| 'policyNumber'
	| 'startDate'
	| 'endDate'
	| 'insuranceType'
	| 'coverageAmount'
> & {
	paymentStatus: PaymentStatusDto
}
