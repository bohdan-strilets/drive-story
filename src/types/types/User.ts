import { Gender } from '../enums/Gender'

import { Image } from './Image'

export type Location = {
	country?: string | null
	city?: string | null
	postalCode?: string | null
}

export type User = {
	_id: string
	firstName: string
	lastName: string
	email: string
	gender: Gender
	avatars: string | null | Image
	posters: string | null | Image
	isActivated: boolean
	createdAt: Date
	updatedAt: Date
	nickname?: string | null
	birthDate?: Date | null
	phoneNumber?: string | null
	location?: Location | null
	currentCar?: string | null
	isGoogleAuth: boolean
}
