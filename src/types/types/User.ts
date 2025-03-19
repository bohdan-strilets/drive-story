import { Gender } from '../enums/Gender'

import { Image } from './Image'
import { Location } from './Location'

export type User = {
	_id: string
	email: string
	gender: Gender
	avatars: string | null | Image
	posters: string | null | Image
	createdAt: Date
	updatedAt: Date
	firstName?: string | null
	lastName?: string | null
	nickname?: string | null
	birthDate?: Date | null
	phoneNumber?: string | null
	isActivated?: boolean
	location?: Location | null
}
