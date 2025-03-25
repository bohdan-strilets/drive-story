import { Gender } from '../enums/Gender'

import { Image } from './Image'
import { Location } from './Location'

export type User = {
	_id: string
	firstName: string | null
	lastName: string | null
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
}
