import { CarBasicInfo } from './CarBasicInfo'
import { CarOwnership } from './CarOwnership'
import { CarRegistration } from './CarRegistration'
import { CarSpecifications } from './CarSpecifications'
import { Image } from './Image'

export type Car = {
	_id: string
	owner: string
	basicInfo: CarBasicInfo
	specifications: CarSpecifications
	registration: CarRegistration
	ownership: CarOwnership
	description: string | null
	photos: string | null | Image
	createdAt: Date
	updatedAt: Date
}
