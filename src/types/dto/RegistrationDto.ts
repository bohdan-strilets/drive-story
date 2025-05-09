import { User } from '../types/User'

export type RegistrationDto = Pick<User, 'firstName' | 'lastName' | 'email'> & {
	password: string
}
