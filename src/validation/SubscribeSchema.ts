import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

export const SubscribeSchema = yup.object().shape({
	name: yup
		.string()
		.trim()
		.min(2, 'Minimum name length is 2 characters')
		.max(70, 'Maximum name length is 70 characters')
		.required('First name is required'),
	email: yup
		.string()
		.trim()
		.email('Invalid email format')
		.required('Email is required'),
})

export type SubscribeFields = yup.InferType<typeof SubscribeSchema>

export const SubscribeValidation = {
	resolver: yupResolver<SubscribeFields>(SubscribeSchema),
}
