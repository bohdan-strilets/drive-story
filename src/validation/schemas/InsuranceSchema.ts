import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { insuranceRules } from '../rules/insuranceRules'

const {
	coverageAmount,
	endDate,
	insuranceType,
	insurerName,
	paymentStatus,
	policyNumber,
	startDate,
} = insuranceRules
const { installmentCost, installmentsCount, isPaid, totalInstallmentsSum } =
	paymentStatus

export const Schema = yup.object().shape({
	insurerName: yup
		.string()
		.trim()
		.required(insurerName.required)
		.min(insurerName.min, insurerName.message)
		.max(insurerName.max, insurerName.message),

	policyNumber: yup
		.string()
		.trim()
		.required(policyNumber.required)
		.min(policyNumber.min, policyNumber.message)
		.max(policyNumber.max, policyNumber.message),

	startDate: yup
		.date()
		.min(startDate.min, startDate.message)
		.max(startDate.max, startDate.message)
		.required(startDate.required),

	endDate: yup
		.date()
		.min(endDate.min, endDate.message)
		.max(endDate.max, endDate.message)
		.required(endDate.required),

	insuranceType: yup
		.string()
		.oneOf(insuranceType.oneOf, insuranceType.oneOfMessage)
		.required(insuranceType.required),

	coverageAmount: yup
		.number()
		.typeError('Coverage amount must be a number')
		.required(coverageAmount.required)
		.min(coverageAmount.min, coverageAmount.message)
		.max(coverageAmount.max, coverageAmount.message)
		.integer(coverageAmount.integerMessage)
		.positive(coverageAmount.integerMessage),

	paymentStatus: yup.object().shape({
		isPaid: yup.boolean().required(isPaid.required),

		installmentsCount: yup
			.number()
			.min(installmentsCount.min, installmentsCount.message)
			.max(installmentsCount.max, installmentsCount.message)
			.integer(installmentsCount.integerMessage)
			.positive(installmentsCount.integerMessage)
			.optional(),

		installmentCost: yup
			.number()
			.min(installmentCost.min, installmentCost.message)
			.max(installmentCost.max, installmentCost.message)
			.integer(installmentCost.integerMessage)
			.positive(installmentCost.integerMessage)
			.optional(),

		totalInstallmentsSum: yup
			.number()
			.min(totalInstallmentsSum.min, totalInstallmentsSum.message)
			.max(totalInstallmentsSum.max, totalInstallmentsSum.message)
			.integer(totalInstallmentsSum.integerMessage)
			.positive(totalInstallmentsSum.integerMessage)
			.optional(),

		paymentDates: yup.array().of(yup.date()).optional(),
	}),
})

export type Fields = yup.InferType<typeof Schema>
export const Validation = { resolver: yupResolver<Fields>(Schema) }
