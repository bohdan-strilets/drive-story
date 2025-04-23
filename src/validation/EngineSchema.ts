import * as yup from 'yup'

export const EngineSchema = yup.object({
	volume: yup
		.number()
		.typeError('Engine volume must be a number')
		.min(500, 'Engine volume must be at least 0.5L')
		.max(10000, 'Engine volume cannot exceed 10L')
		.required('Engine volume is required'),

	power: yup
		.number()
		.typeError('Engine power must be a number')
		.integer('Engine power must be an integer')
		.min(20, 'Engine power must be at least 20 HP')
		.max(2000, 'Engine power cannot exceed 2000 HP')
		.required('Engine power is required'),
})
