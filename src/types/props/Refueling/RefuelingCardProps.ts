import { Fueling } from '@/types/types/Fueling'

export type RefuelingCardProps = Pick<
	Fueling,
	'quantity' | 'pricePerUnit' | 'totalCost' | 'fuelingDate' | 'fuelType'
>
