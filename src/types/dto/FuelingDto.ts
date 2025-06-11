import { Fueling } from '../types/Fueling'

export type FuelingDto = Pick<
	Fueling,
	'fuelType' | 'quantity' | 'pricePerUnit' | 'totalCost' | 'fuelingDate'
>
