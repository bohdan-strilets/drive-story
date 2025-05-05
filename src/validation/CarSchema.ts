import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { CarBasicInfoSchema } from './CarBasicInfoSchema'
import { CarOwnerShipSchema } from './CarOwnerShipSchema'
import { CarRegistrationSchema } from './CarRegistrationSchema'
import { CarSpecificationsSchema } from './CarSpecificationsSchema'

export const CarSchema = yup.object().shape({
	basicInfo: CarBasicInfoSchema,
	specifications: CarSpecificationsSchema,
	registration: CarRegistrationSchema,
	ownership: CarOwnerShipSchema,
	description: yup
		.string()
		.min(20, 'Description must be between 20 and 500 characters long')
		.max(500, 'Description must be between 20 and 500 characters long')
		.nullable()
		.optional(),
})

export type CarFields = yup.InferType<typeof CarSchema>

export const CarValidation = {
	resolver: yupResolver<CarFields>(CarSchema),
}
