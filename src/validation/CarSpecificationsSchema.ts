import * as yup from 'yup'

import { BodyType } from '@/types/enums/BodyType'
import { Drivetrain } from '@/types/enums/Drivetrain'
import { FuelType } from '@/types/enums/FuelType'
import { Transmission } from '@/types/enums/Transmission'

import { EngineSchema } from './EngineSchema'

export const CarSpecificationsSchema = yup.object({
	mileage: yup
		.number()
		.typeError('Mileage must be a number')
		.integer('Mileage must be an integer')
		.positive('Mileage must be a positive number')
		.required('Mileage must be provided'),

	fuelType: yup
		.string()
		.oneOf(
			Object.values(FuelType),
			'Fuel type must be one of the options from the list'
		)
		.required('Fuel type is required'),

	transmission: yup
		.string()
		.oneOf(
			Object.values(Transmission),
			'Transmission must be one of the options from the list'
		)
		.required('Transmission is required'),

	drivetrain: yup
		.string()
		.oneOf(
			Object.values(Drivetrain),
			'Drivetrain must be one of the options from the list'
		)
		.required('Drivetrain is required'),

	bodyType: yup
		.string()
		.oneOf(
			Object.values(BodyType),
			'Body type must be one of the options from the list'
		)
		.required('Body type is required'),

	engine: EngineSchema.required('Please provide engine data'),

	color: yup
		.string()
		.min(1, 'Color must be between 1 and 30 characters long')
		.max(30, 'Color must be between 1 and 30 characters long')
		.optional(),

	doors: yup
		.number()
		.integer('Doors must be an integer')
		.min(2, 'Doors must be at least 2')
		.max(6, 'Doors cannot exceed 6')
		.optional(),

	seats: yup
		.number()
		.integer('Seats must be an integer')
		.min(1, 'Seats must be at least 1')
		.max(9, 'Seats cannot exceed 9')
		.optional(),
})
