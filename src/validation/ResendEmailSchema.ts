import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

export const ResendEmailSchema = yup.object().shape({
	email: yup
		.string()
		.trim()
		.email('Please enter a valid email address')
		.required('Email is required'),
})

export type ResendEmailFields = yup.InferType<typeof ResendEmailSchema>

export const ResendEmailValidation = {
	resolver: yupResolver<ResendEmailFields>(ResendEmailSchema),
}
