import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { passwordRegex } from '@/regex/passwordRegex'

export const ReccoverPasswordSchema = yup.object().shape({
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
})

export type ReccoverPasswordFields = yup.InferType<
	typeof ReccoverPasswordSchema
>

export const ReccoverPasswordValidation = {
	resolver: yupResolver<ReccoverPasswordFields>(ReccoverPasswordSchema),
}
