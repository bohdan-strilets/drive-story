import { RefuelingType } from '@/types/enums/RefuelingType'

const currentDate = new Date()

export const fuelingRules = {
	fuelType: {
		oneOf: Object.values(RefuelingType),
		required: 'Fuel type is required',
		oneOfMessage: 'Fuel type must be one of the allowed values',
	},

	quantity: {
		min: 1,
		max: 100,
		message: 'Quantity must be between 1 and 100',
		required: 'Quantity is required',
		integerMessage: 'Quantity must be a positive number',
	},

	pricePerUnit: {
		min: 1,
		max: 50,
		required: 'Price per unit is required',
		message: 'Price per unit must be between 0,01 and 50',
		integerMessage: 'Price per unit must be a positive number',
	},

	totalCost: {
		min: 1,
		max: 5000,
		message: 'Total cost must be between 0,01 and 5000',
		required: 'Total cost is required',
		integerMessage: 'Total cost must be a positive number',
	},

	fuelingDate: {
		min: new Date(`${currentDate.getFullYear() - 2}-01-01`),
		max: new Date(`${currentDate.getFullYear() + 1}-12-31`),
		message: 'Fueling date must be a valid date',
	},
}
