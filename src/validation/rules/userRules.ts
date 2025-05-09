import { Gender } from '@/types/enums/Gender'

import { passwordRegex } from '@/regex/passwordRegex'
import { phoneNumberRegex } from '@/regex/phoneNumberRegex'
import { postalCodeRegex } from '@/regex/postalCodeRegex'

export const userRules = {
	firstName: {
		placeholder: 'John',
		min: 2,
		max: 50,
		required: 'First name is required',
		message: 'First name must be between 2 and 50 characters',
	},
	lastName: {
		placeholder: 'Smith',
		min: 2,
		max: 50,
		required: 'Last name is required',
		message: 'Last name must be between 2 and 50 characters',
	},
	nickname: {
		placeholder: 'Johnny',
		min: 2,
		max: 50,
		message: 'Nickname must be between 2 and 50 characters',
	},
	email: {
		placeholder: 'john.smith@example.com',
		required: 'Email is required',
		message: 'Please enter a valid email address',
	},
	password: {
		placeholder: 'Password123!',
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
		placeholder: '01-01-1990',
		min: new Date(new Date().getFullYear() - 120, 0, 1),
		max: new Date(new Date().getFullYear() - 16, 0, 1),
		message: 'Age must be between 16 and 120 years',
	},
	phoneNumber: {
		placeholder: '600 123 456',
		pattern: phoneNumberRegex,
		patternMessage: 'Invalid phone number format',
	},
	gender: {
		placeholder: 'Man',
		oneOf: Object.values(Gender),
		oneOfMessage: 'Invalid gender',
	},
	location: {
		country: {
			placeholder: 'Poland',
			min: 2,
			max: 100,
			message: 'Country must be between 2 and 100 characters long',
		},
		city: {
			placeholder: 'Warsaw',
			min: 2,
			max: 100,
			message: 'City must be between 2 and 100 characters long',
		},
		postalCode: {
			placeholder: '00-000',
			pattern: postalCodeRegex,
			patternMessage:
				'Postal code must be a valid postal code for Poland (format: 00-000)',
		},
	},
}
