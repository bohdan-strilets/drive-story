export type AuthState = {
	token: string | null
	isLoggedIn: boolean
	setIsLoggedIn: (isLoggedIn: boolean) => void
	setToken: (token: string | null) => void
}
