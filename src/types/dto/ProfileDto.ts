import { User } from '../types/User'

export type ProfileDto = Pick<
	User,
	| 'firstName'
	| 'lastName'
	| 'gender'
	| 'nickname'
	| 'birthDate'
	| 'phoneNumber'
	| 'location'
>
