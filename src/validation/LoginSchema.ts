import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { passwordRegex } from '@/regex/passwordRegex'

export const LoginSchema = yup.object().shape({
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
})

export type LoginFields = yup.InferType<typeof LoginSchema>

export const LoginValidation = {
	resolver: yupResolver<LoginFields>(LoginSchema),
}
