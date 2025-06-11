import { generateNumberArray } from '@/utils/generateNumberArray'

import { BodyType } from '@/types/enums/BodyType'
import { Drivetrain } from '@/types/enums/Drivetrain'
import { FuelType } from '@/types/enums/FuelType'
import { Transmission } from '@/types/enums/Transmission'

const currentYear = new Date().getFullYear()
const yearProduction = generateNumberArray(currentYear - 40, currentYear + 1)

export const carRules = {
	basicInfo: {
		make: {
			min: 2,
			max: 50,
			required: 'Manufacturer is required',
			message: 'Manufacturer must be between 2 and 50 characters long',
		},
		model: {
			min: 2,
			max: 50,
			required: 'Model is required',
			message: 'Model must be between 2 and 50 characters long',
		},
		year: {
			oneOf: Object.values(yearProduction),
			oneOfMessage: 'Year must be one of the options from the list',
			required: 'Year of production is required',
		},
		shortName: {
			min: 2,
			max: 50,
			message: 'Short name must be between 2 and 50 characters long',
		},
		generation: {
			min: 1,
			max: 50,
			message: 'Generation must be between 1 and 50 characters long',
		},
	},
	specifications: {
		mileage: {
			min: 1,
			max: 1000000,
			required: 'Mileage is required',
			integerMessage: 'Mileage must be a positive, integer number',
		},
		fuelType: {
			oneOf: Object.values(FuelType),
			oneOfMessage: 'Fuel type must be one of the options from the list',
			required: 'Fuel type is required',
		},
		transmission: {
			oneOf: Object.values(Transmission),
			oneOfMessage: 'Transmission must be one of the options from the list',
			required: 'Transmission is required',
		},
		drivetrain: {
			oneOf: Object.values(Drivetrain),
			oneOfMessage: 'Drivetrain must be one of the options from the list',
			required: 'Drivetrain is required',
		},
		bodyType: {
			oneOf: Object.values(BodyType),
			oneOfMessage: 'Body type must be one of the options from the list',
			required: 'Body type is required',
		},
		engine: {
			volume: {
				min: 500,
				max: 10000,
				message: 'Engine volume should be from 0.5L to 10L',
				required: 'Engine volume is required',
				integerMessage: 'Engine volume must be a positive, integer number',
			},
			power: {
				min: 20,
				max: 2000,
				message: 'Engine power should be from 20HP to 2000HP',
				required: 'Engine power is required',
				integerMessage: 'Engine power must be a positive, integer number',
			},
		},
		color: {
			min: 1,
			max: 30,
			message: 'Color must be between 1 and 30 characters long',
		},
		doors: {
			min: 2,
			max: 6,
			message: 'Number of doors should be in the range from 2 to 6',
			integerMessage: 'Number of doors must be a positive, integer number',
		},
		seats: {
			min: 1,
			max: 9,
			message: 'Number of seats should be in the range from 1 to 9',
			integerMessage: 'Number of seats must be a positive, integer number',
		},
	},
	registration: {
		vin: {
			min: 17,
			max: 17,
			message: 'VIN must be exactly 17 characters long',
		},
		regNumber: {
			min: 1,
			max: 15,
			message: 'Registration number must be between 1 and 15 characters long',
		},
		firstRegDate: {
			placeholder: '01-01-2015',
			max: new Date(),
			message: 'First registration date cannot be in the future',
		},
	},
	ownership: {
		purchaseDate: {
			max: new Date(),
			message: 'Purchase date must be a valid date',
		},
		saleDate: {
			max: new Date(),
			message: 'Sale date cannot be before purchase date',
		},
		purchasePrice: {
			min: 1,
			max: 5000000,
			integerMessage: 'Purchase price must be a positive, integer number',
		},
		salePrice: {
			min: 1,
			max: 5000000,
			integerMessage: 'Sale price must be a positive, integer number',
		},
	},
	description: {
		min: 20,
		max: 500,
		message: 'Description must be between 20 and 500 characters',
	},
}
