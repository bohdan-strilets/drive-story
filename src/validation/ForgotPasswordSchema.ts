import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

export const ForgotPasswordSchema = yup.object().shape({
	email: yup
		.string()
		.trim()
		.email('Please enter a valid email address')
		.required('Email is required'),
})

export type ForgotPasswordFields = yup.InferType<typeof ForgotPasswordSchema>

export const ForgotPasswordValidation = {
	resolver: yupResolver<ForgotPasswordFields>(ForgotPasswordSchema),
}
