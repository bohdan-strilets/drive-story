import { InsuranceType } from '@/types/enums/InsuranceType'
import { NumberRates } from '@/types/enums/NumberRates'

const currentDate = new Date()

export const insuranceRules = {
	insurerName: {
		min: 2,
		max: 100,
		required: 'Insurer name is required',
		message: 'Insurer name must be between 2 and 100 characters',
	},
	policyNumber: {
		min: 5,
		max: 50,
		required: 'Policy number is required',
		message: 'Policy number must be between 5 and 50 characters',
	},
	startDate: {
		min: new Date(`${currentDate.getFullYear() - 1}-01-01`),
		max: new Date(`${currentDate.getFullYear() + 1}-12-30`),
		message: 'Please indicate the current start date of the insurance policy.',
		required: 'Insurance policy start date required',
	},
	endDate: {
		min: new Date(`${currentDate.getFullYear() - 1}-01-01`),
		max: new Date(`${currentDate.getFullYear() + 1}-12-30`),
		message:
			'Please indicate the current expiration date of your insurance policy.',
		required: 'Insurance policy expiration date required',
	},
	insuranceType: {
		oneOf: Object.values(InsuranceType),
		oneOfMessage: 'Invalid insurance type',
		required: 'Insurance type is required',
	},
	coverageAmount: {
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
			oneOf: Object.values(NumberRates),
			oneOfMessage: 'Invalid number rates',
		},
		totalInstallmentsSum: {
			min: 0,
			max: 50000,
			message: 'Total installments sum must be at least 0',
			integerMessage:
				'Total installments sum must be a positive, integer number',
		},
	},
}
