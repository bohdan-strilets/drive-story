import { User } from '../types/User'

export type UserState = {
	user: User | null
	isLoading: boolean

	setUser: (user: User | null) => void
	setIsLoading: (loading: boolean) => void
}
