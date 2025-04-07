import { BasicInfoDto } from './BasicInfoDto'
import { CarRegistrationDto } from './CarRegistrationDto'
import { OwnerShipDto } from './OwnerShipDto'
import { SpecificationsDto } from './SpecificationsDto'

export type CarDto = {
	basicInfo: BasicInfoDto
	specifications: SpecificationsDto
	registration: CarRegistrationDto
	ownership: OwnerShipDto
	description: string | null
}
