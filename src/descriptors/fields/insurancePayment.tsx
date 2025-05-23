import StatusBadge from '@/components/UI/StatusBadge'

import { formatNumberWithSpaces } from '@/utils/formatNumberWithSpaces'

import { FieldDescriptor } from '@/types/types/FieldDescriptor'
import { PaymentStatus } from '@/types/types/Insurance'

export const insurancePayment: FieldDescriptor<PaymentStatus>[] = [
	{
		key: 'is-paid',
		label: 'The policy is paid in full',
		render: (payment) => <StatusBadge status={payment?.isPaid ?? false} />,
	},
	{
		key: 'installments-count',
		label: 'Number of rats',
		render: (payment) => payment?.installmentsCount || 0,
	},
	{
		key: 'total-installments-sum',
		label: 'Total cost of all rats',
		render: (payment) =>
			`${formatNumberWithSpaces(payment?.totalInstallmentsSum ?? 0)} PLN`,
	},
]
