import StatusBadge from '@/components/UI/StatusBadge'

import { formatNumberWithSpaces } from '@/utils/formatNumberWithSpaces'
import { parsedDateToString } from '@/utils/parsedDateToString'

import { FieldDescriptor } from '@/types/types/FieldDescriptor'
import { InsurancePolicy } from '@/types/types/InsurancePolicy'

export const insuranceFieldDescriptors: FieldDescriptor<InsurancePolicy>[] = [
	{
		key: 'start-date',
		label: 'Start of insurance policy',
		render: (insurance) => parsedDateToString(insurance?.startDate) || '—',
	},
	{
		key: 'end-date',
		label: 'End of insurance policy',
		render: (insurance) => parsedDateToString(insurance?.endDate) || '—',
	},
	{
		key: 'coverage-amount',
		label: 'Amount of coverage from the policy',
		render: (insurance) =>
			`${formatNumberWithSpaces(insurance?.coverageAmount ?? 0)} PLN`,
	},
	{
		key: 'is-paid',
		label: 'The policy is paid in full?',
		render: (insurance) => (
			<StatusBadge status={insurance?.paymentStatus?.isPaid ?? false} />
		),
	},
]
