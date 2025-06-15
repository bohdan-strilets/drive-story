import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { carRules } from '../rules/carRules'

export const {
	basicInfo,
	specifications,
	registration,
	ownership,
	description,
} = carRules
const { make, model, year, generation, shortName } = basicInfo
const { firstRegDate, regNumber, vin } = registration
const { saleDate, purchasePrice, salePrice, purchaseDate } = ownership
const {
	bodyType,
	transmission,
	drivetrain,
	mileage,
	color,
	doors,
	fuelType,
	seats,
	engine,
} = specifications
const { power, volume } = engine

export const Schema = yup.object().shape({
	basicInfo: yup.object().shape({
		make: yup
			.string()
			.min(make.min, make.message)
			.max(make.max, make.message)
			.required(make.required),

		model: yup
			.string()
			.min(model.min, model.message)
			.max(model.max, model.message)
			.required(model.required),

		year: yup
			.string()
			.oneOf(year.oneOf, year.oneOfMessage)
			.defined(year.required),

		shortName: yup
			.string()
			.min(shortName.min, shortName.message)
			.max(shortName.max, shortName.message)
			.nullable()
			.optional(),

		generation: yup
			.string()
			.min(generation.min, generation.message)
			.max(generation.max, generation.message)
			.nullable()
			.optional(),
	}),

	specifications: yup.object().shape({
		mileage: yup
			.number()
			.min(mileage.min)
			.max(mileage.max)
			.integer(mileage.integerMessage)
			.positive(mileage.integerMessage)
			.required(mileage.required),

		fuelType: yup
			.string()
			.oneOf(fuelType.oneOf, fuelType.oneOfMessage)
			.defined(fuelType.required),

		transmission: yup
			.string()
			.oneOf(transmission.oneOf, transmission.oneOfMessage)
			.defined(transmission.required),

		drivetrain: yup
			.string()
			.oneOf(drivetrain.oneOf, drivetrain.oneOfMessage)
			.defined(drivetrain.required),

		bodyType: yup
			.string()
			.oneOf(bodyType.oneOf, bodyType.oneOfMessage)
			.defined(bodyType.required),

		color: yup
			.string()
			.min(color.min, color.message)
			.max(color.max, color.message)
			.nullable()
			.optional(),

		doors: yup
			.number()
			.integer(doors.integerMessage)
			.min(doors.min, doors.message)
			.max(doors.max, doors.message)
			.optional(),

		seats: yup
			.number()
			.integer(seats.integerMessage)
			.min(seats.min, seats.message)
			.max(seats.max, seats.message)
			.optional(),

		engine: yup.object().shape({
			volume: yup
				.number()
				.integer(volume.integerMessage)
				.min(volume.min, volume.message)
				.max(volume.max, volume.message)
				.required(volume.required),

			power: yup
				.number()
				.integer(power.integerMessage)
				.min(power.min, power.message)
				.max(power.max, power.message)
				.required(power.required),
		}),
	}),

	registration: yup.object().shape({
		vin: yup
			.string()
			.min(vin.min, vin.message)
			.max(vin.max, vin.message)
			.nullable()
			.optional(),

		regNumber: yup
			.string()
			.min(regNumber.min, regNumber.message)
			.max(regNumber.max, regNumber.message)
			.nullable()
			.optional(),

		firstRegDate: yup
			.date()
			.max(firstRegDate.max, firstRegDate.message)
			.nullable()
			.optional(),
	}),

	ownership: yup.object().shape({
		purchaseDate: yup
			.date()
			.max(purchaseDate.max, purchaseDate.maxMessage)
			.nullable()
			.optional(),

		saleDate: yup
			.date()
			.nullable()
			.min(yup.ref('purchaseDate'), saleDate.minMessage)
			.max(saleDate.max, saleDate.maxMessage)
			.when('isSold', {
				is: true,
				then: (s) => s.required(saleDate.required),
				otherwise: (s) => s.optional(),
			}),

		purchasePrice: yup
			.number()
			.min(purchasePrice.min)
			.max(purchasePrice.max)
			.optional(),

		salePrice: yup
			.number()
			.min(salePrice.min)
			.max(salePrice.max)
			.when('isSold', {
				is: true,
				then: (s) =>
					s.required(salePrice.message).positive(salePrice.integerMessage),
				otherwise: (s) => s.optional(),
			}),

		isSold: yup.boolean().optional(),
	}),

	description: yup
		.string()
		.min(description.min, description.message)
		.max(description.max, description.message)
		.nullable()
		.optional(),
})

export type Fields = yup.InferType<typeof Schema>
export const Validation = { resolver: yupResolver<Fields>(Schema) }
