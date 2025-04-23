import { CarBasicInfoDto } from './CarBasicInfoDto'
import { CarOwnerShipDto } from './CarOwnerShipDto'
import { CarRegistrationDto } from './CarRegistrationDto'
import { CarSpecificationsDto } from './CarSpecificationsDto'

export type CarDto = {
	basicInfo: CarBasicInfoDto
	specifications: CarSpecificationsDto
	registration: CarRegistrationDto
	ownership: CarOwnerShipDto
	description?: string | null
}
