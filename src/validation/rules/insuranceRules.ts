import { InsuranceType } from '@/types/enums/InsuranceType'

const currentDate = new Date()

export const insuranceRules = {
	insurerName: {
		placeholder: 'Acme Insurance Co.',
		min: 2,
		max: 100,
		required: 'Insurer name is required',
		message: 'Insurer name must be between 2 and 100 characters',
	},
	policyNumber: {
		placeholder: 'POL-12345678',
		min: 5,
		max: 50,
		required: 'Policy number is required',
		message: 'Policy number must be between 5 and 50 characters',
	},
	startDate: {
		placeholder: '2025-06-01',
		min: new Date(`${currentDate.getFullYear() - 1}-01-01`),
		max: new Date(`${currentDate.getFullYear() + 1}-12-30`),
		message: 'Please indicate the current start date of the insurance policy.',
		required: 'Insurance policy start date required',
	},
	endDate: {
		placeholder: '2026-06-01',
		min: new Date(`${currentDate.getFullYear() - 1}-01-01`),
		max: new Date(`${currentDate.getFullYear() + 1}-12-30`),
		message:
			'Please indicate the current expiration date of your insurance policy.',
		required: 'Insurance policy expiration date required',
	},
	insuranceType: {
		placeholder: 'OC',
		oneOf: Object.values(InsuranceType),
		oneOfMessage: 'Invalid insurance type',
		required: 'Insurance type is required',
	},
	coverageAmount: {
		placeholder: '100000',
		min: 0,
		max: 500000,
		message: 'Coverage amount must be between 0 and 10000',
		required: 'Coverage amount is required',
		integerMessage: 'Coverage amount must be a positive, integer number',
	},
	paymentStatus: {
		isPaid: {
			required:
				'Please indicate whether the insurance has been paid in full or not.',
		},
		installmentsCount: {
			placeholder: '3',
			min: 1,
			max: 12,
			message: 'Installments count must be between 1 and 12',
			integerMessage: 'Installments count must be a positive, integer number',
		},
		installmentCost: {
			placeholder: '2000',
			min: 0,
			max: 10000,
			message: 'Installment cost must be at least 0',
			integerMessage: 'Installment cost must be a positive, integer number',
		},
		totalInstallmentsSum: {
			placeholder: '10000',
			min: 0,
			max: 50000,
			message: 'Total installments sum must be at least 0',
			integerMessage:
				'Total installments sum must be a positive, integer number',
		},
		paymentDates: {},
	},
}
