import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { fuelingRules } from '../rules/fuelingRules'

const { fuelType, fuelingDate, pricePerUnit, quantity, totalCost } =
	fuelingRules

export const Schema = yup.object().shape({
	fuelType: yup
		.string()
		.oneOf(fuelType.oneOf, fuelType.oneOfMessage)
		.required(fuelType.required),

	fuelingDate: yup
		.date()
		.min(fuelingDate.min, fuelingDate.message)
		.max(fuelingDate.max, fuelingDate.message),

	pricePerUnit: yup
		.number()
		.min(pricePerUnit.min, pricePerUnit.message)
		.max(pricePerUnit.max, pricePerUnit.message)
		.positive(pricePerUnit.integerMessage)
		.required(pricePerUnit.required),

	quantity: yup
		.number()
		.min(quantity.min, quantity.message)
		.max(quantity.max, quantity.message)
		.positive(quantity.integerMessage)
		.required(quantity.required),

	totalCost: yup
		.number()
		.min(totalCost.min, totalCost.message)
		.max(totalCost.max, totalCost.message)
		.positive(totalCost.integerMessage)
		.required(totalCost.required),
})

export type Fields = yup.InferType<typeof Schema>
export const Validation = { resolver: yupResolver<Fields>(Schema) }
