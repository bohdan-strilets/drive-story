import { Gender } from '../enums/Gender'

import { Location } from './Location'

export type User = {
	_id: string
	email: string
	gender: Gender
	avatars: string | null
	posters: string | null
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
