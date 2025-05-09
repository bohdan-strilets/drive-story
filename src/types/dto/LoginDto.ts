import { User } from '../types/User'

export type LoginDto = Pick<User, 'email'> & {
	password: string
}
