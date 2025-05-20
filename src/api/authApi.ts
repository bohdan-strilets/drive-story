import apiClient from '@/config/axiosConfig'

import { handleApiError } from '@/utils/handleApiError'

import { GoogleAuthDto } from '@/types/dto/GoogleAuthDto'
import { LoginDto } from '@/types/dto/LoginDto'
import { RegistrationDto } from '@/types/dto/RegistrationDto'
import { ApiResponse } from '@/types/types/ApiResponse'
import { AuthResponse } from '@/types/types/AuthResponse'

const ENDPOINT = '/auth'

export const registration = async (
	payload: RegistrationDto
): Promise<ApiResponse<AuthResponse | null>> => {
	try {
		const path = `${ENDPOINT}/registration`
		const { data } = await apiClient.post(path, payload)
		return data
	} catch (error) {
		return handleApiError(error)
	}
}

export const login = async (
	payload: LoginDto
): Promise<ApiResponse<AuthResponse | null>> => {
	try {
		const path = `${ENDPOINT}/login`
		const { data } = await apiClient.post(path, payload)
		return data
	} catch (error) {
		return handleApiError(error)
	}
}

export const logout = async (): Promise<ApiResponse> => {
	try {
		const path = `${ENDPOINT}/logout`
		const { data } = await apiClient.get(path)
		return data
	} catch (error) {
		return handleApiError(error)
	}
}

export const refreshToken = async (): Promise<
	ApiResponse<AuthResponse | null>
> => {
	try {
		const path = `${ENDPOINT}/refresh-token`
		const { data } = await apiClient.get(path)
		return data
	} catch (error) {
		return handleApiError(error)
	}
}

export const googleAuth = async (
	googleToken: GoogleAuthDto
): Promise<ApiResponse<AuthResponse | null>> => {
	try {
		const path = `${ENDPOINT}/google-auth`
		const { data } = await apiClient.post(path, googleToken)
		return data
	} catch (error) {
		return handleApiError(error)
	}
}
