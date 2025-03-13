import { AxiosError } from 'axios'

import { ApiResponse } from '@/types/types/ApiResponse'

export const handleApiError = (error: unknown): ApiResponse<null> => {
	if (error instanceof AxiosError) {
		if (error.response && error.response.data) {
			return error.response.data as ApiResponse<null>
		}

		return {
			success: false,
			statusCode: error.response?.status || 500,
			message: 'Network error. Please check your connection.',
		}
	}

	if (error instanceof Error) {
		return {
			success: false,
			statusCode: 500,
			message: error.message,
		}
	}

	return {
		success: false,
		statusCode: 500,
		message: 'An unknown error occurred.',
	}
}
