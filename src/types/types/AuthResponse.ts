import { TokenPair } from './TokenPair'
import { User } from './User'

export type AuthResponse = {
	user: User
	tokens: TokenPair
}
