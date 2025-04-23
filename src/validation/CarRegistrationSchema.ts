import * as yup from 'yup'

export const CarRegistrationSchema = yup.object({
	vin: yup
		.string()
		.length(17, 'VIN must be exactly 17 characters long')
		.nullable()
		.optional(),

	regNumber: yup
		.string()
		.min(1, 'Registration number must be between 1 and 15 characters long')
		.max(15, 'Registration number must be between 1 and 15 characters long')
		.nullable()
		.optional(),

	firstRegDate: yup
		.date()
		.max(new Date(), 'First registration date cannot be in the future')
		.typeError('First registration date must be a valid date')
		.nullable()
		.optional(),
})
