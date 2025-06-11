import { RefuelingType } from '../enums/RefuelingType'

import { Image } from './Image'

export type Fueling = {
	_id: string
	owner: string
	contactId?: string | null
	carId: string
	fuelType: RefuelingType
	quantity: number
	pricePerUnit: number
	totalCost: number
	fuelingDate?: Date
	photos: string | Image | null
	createdAt: Date
	updatedAt: Date
}
