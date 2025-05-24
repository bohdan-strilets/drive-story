import { User } from '../types/User'

export type UserState = {
	user: User | null

	setUser: (user: User | null) => void
}
