import axios from 'axios'

export const API_URL = 'http://localhost:4000/api/v1/'

const apiClient = axios.create({
	withCredentials: true,
	baseURL: API_URL,
})

export default apiClient
