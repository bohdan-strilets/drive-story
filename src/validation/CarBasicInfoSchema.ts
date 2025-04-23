import * as yup from 'yup'

const currentYearPlusOne = new Date().getFullYear() + 1

export const CarBasicInfoSchema = yup.object({
	make: yup
		.string()
		.min(2, 'Make must be between 2 and 50 characters long')
		.max(50, 'Make must be between 2 and 50 characters long')
		.required('Make must be a string'),

	model: yup
		.string()
		.min(2, 'Model must be between 2 and 50 characters long')
		.max(50, 'Model must be between 2 and 50 characters long')
		.required('Model must be a string'),

	year: yup
		.number()
		.typeError('Year must be an integer')
		.integer('Year must be an integer')
		.min(1886, 'Year cannot be before 1886')
		.max(currentYearPlusOne, `Year cannot be later than ${currentYearPlusOne}`)
		.required('Year is a required field'),

	shortName: yup
		.string()
		.min(2, 'Short name must be between 2 and 50 characters long')
		.max(50, 'Short name must be between 2 and 50 characters long')
		.nullable()
		.optional(),

	generation: yup
		.string()
		.min(1, 'Generation must be between 1 and 50 characters long')
		.max(50, 'Generation must be between 1 and 50 characters long')
		.nullable()
		.optional(),
})
