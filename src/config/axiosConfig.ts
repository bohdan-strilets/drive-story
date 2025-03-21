import axios from 'axios'

import { refreshToken } from '@/api/authApi'

import { authStorageKey } from './localStorageKeys'
import { routes } from './routes'

export const API_URL = 'http://localhost:4000/api/v1/'

const apiClient = axios.create({
	withCredentials: true,
	baseURL: API_URL,
})

apiClient.interceptors.request.use((config) => {
	const dataFromLocalStorage = localStorage.getItem(authStorageKey)
	let parsedData = null

	if (dataFromLocalStorage) {
		try {
			parsedData = JSON.parse(dataFromLocalStorage)
		} catch (error) {
			console.error('Error parsing data from localStorage:', error)
		}
	}

	const accessToken: string | null = parsedData?.state?.token
	if (accessToken) config.headers.Authorization = `Bearer ${accessToken}`

	return config
})

apiClient.interceptors.response.use(
	(config) => config,
	async (error) => {
		const { response, config } = error

		if (config.url.includes('refresh-token')) {
			return Promise.reject(error)
		}

		if (response?.status === 401 && !config._isRetry) {
			config._isRetry = true

			try {
				const { data } = await refreshToken()

				const authStateFromLS = localStorage.getItem(authStorageKey)
				const parsedAuthStateFromLS = authStateFromLS
					? JSON.parse(authStateFromLS)
					: {}

				const updatedAuthStateToLS = {
					state: {
						isLoggedIn: true,
						token: data?.tokens.accessToken,
					},
					...parsedAuthStateFromLS,
				}

				localStorage.setItem(
					authStorageKey,
					JSON.stringify(updatedAuthStateToLS)
				)

				return apiClient.request(config)
			} catch (error) {
				console.error('Refresh token request failed', error)
				localStorage.removeItem(authStorageKey)
				window.location.href = routes.AUTH
			}
		}

		return Promise.reject(error)
	}
)

export default apiClient
