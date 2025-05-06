import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { InsuranceType } from '@/types/enums/InsuranceType'

import { PaymentStatusSchema } from './PaymentStatusSchema'

export const InsurancePolicySchema = yup.object({
	insurerName: yup
		.string()
		.trim()
		.required('Insurer name is required')
		.min(2, 'Insurer name must be at least 2 characters')
		.max(100, 'Insurer name must be at most 100 characters'),

	policyNumber: yup
		.string()
		.trim()
		.required('Policy number is required')
		.min(5, 'Policy number must be at least 5 characters')
		.max(50, 'Policy number must be at most 50 characters'),

	startDate: yup
		.date()
		.typeError('Start date must be a valid date')
		.required('Start date is required'),

	endDate: yup
		.date()
		.typeError('End date must be a valid date')
		.required('End date is required'),

	insuranceType: yup
		.mixed<InsuranceType>()
		.oneOf(Object.values(InsuranceType), 'Invalid insurance type')
		.optional(),

	coverageAmount: yup
		.number()
		.typeError('Coverage amount must be a number')
		.required('Coverage amount is required')
		.min(0, 'Coverage amount must be at least 0'),

	paymentStatus: PaymentStatusSchema.optional(),
})

export type InsurancePolicyFields = yup.InferType<typeof InsurancePolicySchema>

export const InsurancePolicyValidation = {
	resolver: yupResolver<InsurancePolicyFields>(InsurancePolicySchema),
}
