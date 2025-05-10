import { formatNumberWithSpaces } from '@/utils/formatNumberWithSpaces'

import { FieldDescriptor } from '@/types/types/FieldDescriptor'
import { PaymentStatus } from '@/types/types/InsurancePolicy'

export const insurancePaymentStatusDescriptors: FieldDescriptor<PaymentStatus>[] =
	[
		{
			key: 'installments-count',
			label: 'Number of rats',
			render: (payment) => payment?.installmentsCount || 0,
		},
		{
			key: 'installment-cost',
			label: 'Cost of one rata',
			render: (payment) =>
				`${formatNumberWithSpaces(payment?.installmentCost ?? 0)} PLN`,
		},
		{
			key: 'total-installments-sum',
			label: 'Total cost of all rats',
			render: (payment) =>
				`${formatNumberWithSpaces(payment?.totalInstallmentsSum ?? 0)} PLN`,
		},
	]
