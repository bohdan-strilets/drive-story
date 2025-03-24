import apiClient from '@/config/axiosConfig'

import { handleApiError } from '@/utils/handleApiError'

import { GoogleAuthDto } from '@/types/dto/GoogleAuthDto'
import { LoginDto } from '@/types/dto/LoginDto'
import { RegistrationDto } from '@/types/dto/RegistrationDto'
import { ApiResponse } from '@/types/types/ApiResponse'
import { AuthResponse } from '@/types/types/AuthResponse'

const ENDPOINT = '/auth'

export const registration = async (
	dto: RegistrationDto
): Promise<ApiResponse<AuthResponse | null>> => {
	try {
		const { data } = await apiClient.post(`${ENDPOINT}/registration`, dto)
		return data
	} catch (error) {
		return handleApiError(error)
	}
}

export const login = async (
	dto: LoginDto
): Promise<ApiResponse<AuthResponse | null>> => {
	try {
		const { data } = await apiClient.post(`${ENDPOINT}/login`, dto)
		return data
	} catch (error) {
		return handleApiError(error)
	}
}

export const logout = async (): Promise<ApiResponse> => {
	try {
		const { data } = await apiClient.get(`${ENDPOINT}/logout`)
		return data
	} catch (error) {
		return handleApiError(error)
	}
}

export const refreshToken = async (): Promise<
	ApiResponse<AuthResponse | null>
> => {
	try {
		const { data } = await apiClient.get(`${ENDPOINT}/refresh-token`)
		return data
	} catch (error) {
		return handleApiError(error)
	}
}

export const googleAuth = async (
	googleToken: GoogleAuthDto
): Promise<ApiResponse<AuthResponse | null>> => {
	try {
		const { data } = await apiClient.post(
			`${ENDPOINT}/google-auth`,
			googleToken
		)
		return data
	} catch (error) {
		return handleApiError(error)
	}
}
