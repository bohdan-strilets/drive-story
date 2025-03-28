import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { Gender } from '@/types/enums/Gender'

import { phoneNumberRegex } from '@/regex/phoneNumberRegex'

import { LocationSchema } from './LocationSchema'

const CURRENT_YEAR = new Date().getFullYear()
const maxDate = new Date(CURRENT_YEAR - 16, 0, 1) // не младше 16 лет
const minDate = new Date(CURRENT_YEAR - 120, 0, 1) // не старше 120 лет

export const EditProfileSchema = yup.object().shape({
	firstName: yup
		.string()
		.trim()
		.min(2, 'First name must be between 2 and 50 characters long')
		.max(50, 'First name must be between 2 and 50 characters long')
		.optional(),

	lastName: yup
		.string()
		.trim()
		.min(2, 'Last name must be between 2 and 50 characters long')
		.max(50, 'Last name must be between 2 and 50 characters long')
		.optional(),

	nickname: yup
		.string()
		.trim()
		.min(2, 'Nickname must be between 2 and 50 characters long')
		.max(50, 'Nickname must be between 2 and 50 characters long')
		.optional(),

	birthDate: yup
		.date()
		.min(minDate, 'Age must not exceed 120 years')
		.max(maxDate, 'You must be at least 16 years old')
		.typeError('Birth date must be a valid date')
		.optional(),

	phoneNumber: yup
		.string()
		.matches(phoneNumberRegex, {
			message: 'Phone number must contain exactly 9 digits',
		})
		.optional(),

	gender: yup.string().oneOf(Object.values(Gender)).optional(),

	location: LocationSchema.optional(),
})

export type EditProfileFields = yup.InferType<typeof EditProfileSchema>

export const EditProfileValidation = {
	resolver: yupResolver<EditProfileFields>(EditProfileSchema),
}
