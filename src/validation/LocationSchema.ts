import * as yup from 'yup'

import { postalCodeRegex } from '@/regex/postalCodeRegex'

export const LocationSchema = yup.object().shape({
	country: yup
		.string()
		.trim()
		.min(2, 'Country must be between 2 and 100 characters long')
		.max(100, 'Country must be between 2 and 100 characters long')
		.optional(),

	city: yup
		.string()
		.trim()
		.min(2, 'City must be between 2 and 100 characters long')
		.max(100, 'City must be between 2 and 100 characters long')
		.optional(),

	postalCode: yup
		.string()
		.trim()
		.matches(
			postalCodeRegex,
			'Postal code must be a valid postal code for Poland (format: 00-000)'
		)
		.optional(),
})
