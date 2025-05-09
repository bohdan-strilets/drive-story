import { BodyType } from '@/types/enums/BodyType'
import { Drivetrain } from '@/types/enums/Drivetrain'
import { FuelType } from '@/types/enums/FuelType'
import { Transmission } from '@/types/enums/Transmission'

const currentYearPlusOne = new Date().getFullYear() + 1

export const carRules = {
	basicInfo: {
		make: {
			placeholder: 'Toyota',
			min: 2,
			max: 50,
			required: 'Manufacturer is required',
			message: 'Manufacturer must be between 2 and 50 characters long',
		},
		model: {
			placeholder: 'Corolla',
			min: 2,
			max: 50,
			required: 'Model is required',
			message: 'Model must be between 2 and 50 characters long',
		},
		year: {
			placeholder: '2022',
			min: 1886,
			max: currentYearPlusOne,
			required: 'Year of production is required',
			message: `Year of production must be between 1886 and ${currentYearPlusOne}`,
			integerMessage: 'Year must be a positive, integer number',
		},
		shortName: {
			placeholder: 'Corolla E210',
			min: 2,
			max: 50,
			message: 'Short name must be between 2 and 50 characters long',
		},
		generation: {
			placeholder: '12th',
			min: 1,
			max: 50,
			message: 'Generation must be between 1 and 50 characters long',
		},
	},
	specifications: {
		mileage: {
			placeholder: '150000',
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
				placeholder: '2000',
				min: 500,
				max: 10000,
				message: 'Engine volume should be from 0.5L to 10L',
				required: 'Engine volume is required',
				integerMessage: 'Engine volume must be a positive, integer number',
			},
			power: {
				placeholder: '150',
				min: 20,
				max: 2000,
				message: 'Engine power should be from 20HP to 2000HP',
				required: 'Engine power is required',
				integerMessage: 'Engine power must be a positive, integer number',
			},
		},
		color: {
			placeholder: 'Red',
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
			placeholder: '1HGCM82633A004352',
			min: 17,
			max: 17,
			message: 'VIN must be exactly 17 characters long',
		},
		regNumber: {
			placeholder: 'ABC1234',
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
			placeholder: '05-10-2020',
			max: new Date(),
			message: 'Purchase date must be a valid date',
		},
		saleDate: {
			placeholder: '12-12-2023',
			max: new Date(),
			message: 'Sale date cannot be before purchase date',
		},
	},
	description: {
		placeholder: 'A reliable compact car in excellent condition.',
		min: 20,
		max: 500,
		message: 'Description must be between 20 and 500 characters',
	},
}
