import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

export const EditEmailSchema = yup.object().shape({
	email: yup
		.string()
		.trim()
		.email('Please enter a valid email address')
		.required('Email is required'),
})

export type EditEmailFields = yup.InferType<typeof EditEmailSchema>

export const EditEmailValidation = {
	resolver: yupResolver<EditEmailFields>(EditEmailSchema),
}
