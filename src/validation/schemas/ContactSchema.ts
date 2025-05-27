import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { contactRules } from '../rules/contactRules'

const {
	address,
	email,
	mapLink,
	name,
	phone,
	specializations,
	website,
	workingHours,
} = contactRules

const { city, country, houseNumber, postalCode, street } = address
const { open, close } = workingHours

export const Schema = yup.object().shape({
	name: yup
		.string()
		.required(name.required)
		.min(name.min, name.message)
		.max(name.max, name.message),

	phone: yup
		.string()
		.matches(phone.pattern, phone.patternMessage)
		.length(phone.length, phone.message)
		.required(phone.required),

	email: yup.string().email(email.message).optional().nullable(),

	address: yup.object().shape({
		street: yup
			.string()
			.min(street.min, street.message)
			.max(street.max, street.message)
			.required(street.required),

		houseNumber: yup
			.string()
			.min(houseNumber.min, houseNumber.message)
			.max(houseNumber.max, houseNumber.message)
			.required(houseNumber.required),

		city: yup
			.string()
			.min(city.min, city.message)
			.max(city.max, city.message)
			.required(city.required),

		country: yup
			.string()
			.min(country.min, country.message)
			.max(country.max, country.message)
			.required(country.required),

		postalCode: yup
			.string()
			.matches(postalCode.pattern, postalCode.patternMessage)
			.optional()
			.nullable(),
	}),

	mapLink: yup.string().url(mapLink.message).optional().nullable(),

	website: yup.string().url(website.message).optional().nullable(),

	workingHours: yup
		.object()
		.shape({
			open: yup.string().oneOf(open.oneOf, open.oneOfMessage).optional(),

			close: yup.string().oneOf(close.oneOf, close.oneOfMessage).optional(),
		})
		.optional(),

	specializations: yup
		.string()
		.min(specializations.min, specializations.message)
		.max(specializations.max, specializations.message)
		.optional(),
})

export type Fields = yup.InferType<typeof Schema>
export const Validation = { resolver: yupResolver<Fields>(Schema) }
