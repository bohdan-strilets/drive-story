import * as yup from 'yup'

import { InstallmentsCount } from '@/types/enums/InstallmentsCount'

export const PaymentStatusSchema = yup.object({
	isPaid: yup.boolean().required('isPaid is required'),

	installmentsCount: yup
		.string()
		.oneOf(Object.values(InstallmentsCount), 'Invalid installments count')
		.optional(),

	installmentCost: yup
		.number()
		.typeError('installmentCost must be a number')
		.min(0, 'installmentCost must be at least 0')
		.optional(),

	totalInstallmentsSum: yup
		.number()
		.typeError('totalInstallmentsSum must be a number')
		.min(0, 'totalInstallmentsSum must be at least 0')
		.optional(),

	paymentDates: yup
		.array()
		.of(yup.date().typeError('Each payment date must be a valid date'))
		.optional(),
})
