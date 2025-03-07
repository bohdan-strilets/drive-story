import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { passwordRegex } from '@/regex/passwordRegex'

export const RegistrationSchema = yup.object().shape({
	firstName: yup
		.string()
		.trim()
		.min(2, 'First name must be at least 2 characters long')
		.max(50, 'First name must be at most 50 characters long')
		.required('First name is required'),
	lastName: yup
		.string()
		.trim()
		.min(2, 'Last name must be at least 2 characters long')
		.max(50, 'Last name must be at most 50 characters long')
		.required('Last name is required'),
	email: yup
		.string()
		.trim()
		.email('Please enter a valid email address')
		.required('Email is required'),
	password: yup
		.string()
		.trim()
		.min(6, 'Password must be at least 6 characters long')
		.max(12, 'Password must be at most 12 characters long')
		.matches(
			passwordRegex,
			'Password must contain at least one letter, one digit, and one special character'
		)
		.required('Password is required'),
	passwordAgain: yup
		.string()
		.trim()
		.min(6, 'Password must be at least 6 characters long')
		.max(12, 'Password must be at most 12 characters long')
		.required('Password confirmation is required')
		.oneOf([yup.ref('password')], 'Passwords must match'),
	isAccessRight: yup.boolean().oneOf([true], 'Must read and agree.'),
})

export type RegistrationFields = yup.InferType<typeof RegistrationSchema>

export const RegistrationValidation = {
	resolver: yupResolver<RegistrationFields>(RegistrationSchema),
}
