import axios from 'axios'

import { authStorageKey } from './localStorageKeys'

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

export default apiClient
