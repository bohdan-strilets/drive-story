import { RefuelingType } from '../enums/RefuelingType'

import { Contact } from './Contact'
import { Image } from './Image'

export type Fueling = {
	_id: string
	owner: string
	contactId: string | Contact | null
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
