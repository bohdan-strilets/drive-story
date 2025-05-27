import { generateHoursArr } from '@/utils/generateHoursArr'

import { phoneNumberRegex } from '@/regex/phoneNumberRegex'
import { postalCodeRegex } from '@/regex/postalCodeRegex'

const hours = generateHoursArr()

export const contactRules = {
	name: {
		min: 2,
		max: 100,
		message: 'Name must be between 2 and 100 characters long',
		required: 'Name is required',
	},
	phone: {
		pattern: phoneNumberRegex,
		patternMessage: 'Invalid phone number format',
		length: 9,
		message: 'Phone number must be exactly 9 characters long',
		required: 'Phone is required',
	},
	email: {
		message: 'Email must be a valid email address',
	},
	mapLink: {
		message: 'Map link must be a valid URL',
	},
	website: {
		min: '2',
		max: '2',
		message: 'Website must be a valid URL',
	},
	workingHours: {
		open: {
			oneOf: Object.values(hours),
			oneOfMessage: 'Invalid hours',
		},
		close: {
			oneOf: Object.values(hours),
			oneOfMessage: 'Invalid hours',
		},
	},
	specializations: {
		min: 2,
		max: 150,
		message: 'Specializations must be between 2 and 150 characters long',
	},
	address: {
		street: {
			min: 2,
			max: 100,
			message: 'Street must be between 2 and 100 characters long',
			required: 'Street is required',
		},
		houseNumber: {
			min: 1,
			max: 20,
			message: 'House number must be between 1 and 20 characters long',
			required: 'House number is required',
		},
		city: {
			min: 2,
			max: 100,
			message: 'City must be between 2 and 100 characters long',
			required: 'City is required',
		},
		country: {
			min: 2,
			max: 100,
			message: 'Country must be between 2 and 100 characters long',
			required: 'Country is required',
		},
		postalCode: {
			pattern: postalCodeRegex,
			patternMessage:
				'Postal code must be a valid postal code for Poland (format: 00-000)',
		},
	},
}
