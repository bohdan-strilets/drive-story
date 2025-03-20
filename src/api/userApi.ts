import apiClient from '@/config/axiosConfig'

import { handleApiError } from '@/utils/handleApiError'

import { ApiResponse } from '@/types/types/ApiResponse'
import { User } from '@/types/types/User'

const ENDPOINT = '/user'

export const getCurrentUser = async (): Promise<ApiResponse<User | null>> => {
	try {
		const { data } = await apiClient.get(`${ENDPOINT}/current-user`)
		return data
	} catch (error) {
		return handleApiError(error)
	}
}
