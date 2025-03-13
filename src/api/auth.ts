import apiClient from '@/config/axiosConfig'

import { handleApiError } from '@/utils/handleApiError'

import { LoginDto } from '@/types/dto/LoginDto'
import { RegistrationDto } from '@/types/dto/RegistrationDto'
import { ApiResponse } from '@/types/types/ApiResponse'
import { AuthResponse } from '@/types/types/AuthResponse'

const AUTH_ENDPOINT = '/auth'

export const registration = async (
	dto: RegistrationDto
): Promise<ApiResponse<AuthResponse | null>> => {
	try {
		const { data } = await apiClient.post(`${AUTH_ENDPOINT}/registration`, dto)
		return data
	} catch (error) {
		return handleApiError(error)
	}
}

export const login = async (
	dto: LoginDto
): Promise<ApiResponse<AuthResponse | null>> => {
	try {
		const { data } = await apiClient.post(`${AUTH_ENDPOINT}/login`, dto)
		return data
	} catch (error) {
		return handleApiError(error)
	}
}

export const logout = async (): Promise<ApiResponse> => {
	try {
		const { data } = await apiClient.get(`${AUTH_ENDPOINT}/logout`)
		return data
	} catch (error) {
		return handleApiError(error)
	}
}

export const refreshToken = async (): Promise<
	ApiResponse<AuthResponse | null>
> => {
	try {
		const { data } = await apiClient.get(`${AUTH_ENDPOINT}/refresh-token`)
		return data
	} catch (error) {
		return handleApiError(error)
	}
}
