import { Gender } from '../enums/Gender'
import { Location } from '../types/Location'

export type ProfileDto = {
	firstName?: string
	lastName?: string
	nickname?: string
	birthDate?: Date
	phoneNumber?: string
	gender?: Gender
	location?: Location
}
