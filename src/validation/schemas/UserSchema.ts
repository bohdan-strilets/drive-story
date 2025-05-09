import * as yup from 'yup'

import { userRules } from '../rules/userRules'

const {
	firstName,
	lastName,
	nickname,
	email,
	password,
	birthDate,
	phoneNumber,
	gender,
	location,
} = userRules
const { country, city, postalCode } = location

export const UserSchema = yup.object().shape({
	firstName: yup
		.string()
		.trim()
		.min(firstName.min, firstName.message)
		.max(firstName.max, firstName.message)
		.required(firstName.required),

	lastName: yup
		.string()
		.trim()
		.min(lastName.min, lastName.message)
		.max(lastName.max, lastName.message)
		.required(lastName.required),

	nickname: yup
		.string()
		.trim()
		.min(nickname.min, nickname.message)
		.max(nickname.max, nickname.message)
		.optional(),

	email: yup.string().trim().email(email.message).required(email.required),

	password: yup
		.string()
		.trim()
		.min(password.min, password.message)
		.max(password.max, password.message)
		.matches(password.pattern, password.patternMessage)
		.required(password.required),

	birthDate: yup
		.date()
		.min(birthDate.min, birthDate.message)
		.max(birthDate.max, birthDate.message)
		.optional(),

	phoneNumber: yup
		.string()
		.matches(phoneNumber.pattern, phoneNumber.patternMessage)
		.optional(),

	gender: yup.string().oneOf(gender.oneOf, gender.oneOfMessage).optional(),

	location: yup.object().shape({
		country: yup
			.string()
			.trim()
			.min(country.min, country.message)
			.max(country.max, country.message)
			.optional(),

		city: yup
			.string()
			.trim()
			.min(city.min, city.message)
			.max(city.max, city.message)
			.optional(),

		postalCode: yup
			.string()
			.trim()
			.matches(postalCode.pattern, postalCode.patternMessage)
			.optional(),
	}),
})
