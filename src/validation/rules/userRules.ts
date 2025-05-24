import { Gender } from '@/types/enums/Gender'

import { passwordRegex } from '@/regex/passwordRegex'
import { phoneNumberRegex } from '@/regex/phoneNumberRegex'
import { postalCodeRegex } from '@/regex/postalCodeRegex'

export const userRules = {
	firstName: {
		min: 2,
		max: 50,
		required: 'First name is required',
		message: 'First name must be between 2 and 50 characters',
	},
	lastName: {
		min: 2,
		max: 50,
		required: 'Last name is required',
		message: 'Last name must be between 2 and 50 characters',
	},
	nickname: {
		min: 2,
		max: 50,
		message: 'Nickname must be between 2 and 50 characters',
	},
	email: {
		required: 'Email is required',
		message: 'Please enter a valid email address',
	},
	password: {
		min: 6,
		max: 12,
		message: 'Password must be between 6 and 12 characters',
		pattern: passwordRegex,
		patternMessage:
			'Password must contain at least one letter, one digit, and one special character',
		oneOfMessage: 'Passwords must match',
		required: 'Password is required',
	},
	birthDate: {
		min: new Date(new Date().getFullYear() - 120, 0, 1),
		max: new Date(new Date().getFullYear() - 16, 0, 1),
		message: 'Age must be between 16 and 120 years',
	},
	phoneNumber: {
		pattern: phoneNumberRegex,
		patternMessage: 'Invalid phone number format',
	},
	gender: {
		oneOf: Object.values(Gender),
		oneOfMessage: 'Invalid gender',
		required: 'Gender is required',
	},
	location: {
		country: {
			min: 2,
			max: 100,
			message: 'Country must be between 2 and 100 characters long',
		},
		city: {
			min: 2,
			max: 100,
			message: 'City must be between 2 and 100 characters long',
		},
		postalCode: {
			pattern: postalCodeRegex,
			patternMessage:
				'Postal code must be a valid postal code for Poland (format: 00-000)',
		},
	},
}
