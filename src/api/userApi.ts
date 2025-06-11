import apiClient from '@/config/axiosConfig'

import { handleApiError } from '@/utils/handleApiError'

import { CurrentCarDto } from '@/types/dto/CurrentCarDto'
import { EditPasswordDto } from '@/types/dto/EditPasswordDto'
import { EmailDto } from '@/types/dto/EmailDto'
import { ProfileDto } from '@/types/dto/ProfileDto'
import { SetPasswordDto } from '@/types/dto/SetPasswordDto'
import { ResetPasswordParams } from '@/types/params/ResetPasswordParams'
import { ApiResponse } from '@/types/types/ApiResponse'
import { User } from '@/types/types/User'

const ENDPOINT = '/user'

export const getCurrentUser = async (): Promise<ApiResponse<User | null>> => {
	try {
		const path = `${ENDPOINT}/current-user`
		const { data } = await apiClient.get(path)
		return data
	} catch (error) {
		return handleApiError(error)
	}
}

export const resendActivationEmail = async (
	payload: EmailDto
): Promise<ApiResponse> => {
	try {
		const path = `${ENDPOINT}/request-activation-email-resend`
		const { data } = await apiClient.post(path, payload)
		return data
	} catch (error) {
		return handleApiError(error)
	}
}

export const editProfile = async (
	payload: ProfileDto
): Promise<ApiResponse<User | null>> => {
	try {
		const path = `${ENDPOINT}/edit-profile`
		const { data } = await apiClient.patch(path, payload)
		return data
	} catch (error) {
		return handleApiError(error)
	}
}

export const editEmail = async (
	payload: EmailDto
): Promise<ApiResponse<User | null>> => {
	try {
		const path = `${ENDPOINT}/edit-email`
		const { data } = await apiClient.patch(path, payload)
		return data
	} catch (error) {
		return handleApiError(error)
	}
}

export const requestResetPassword = async (
	payload: EmailDto
): Promise<ApiResponse> => {
	try {
		const path = `${ENDPOINT}/request-reset-password`
		const { data } = await apiClient.post(path, payload)
		return data
	} catch (error) {
		return handleApiError(error)
	}
}

export const resetPassword = async ({
	payload,
	resetToken,
}: ResetPasswordParams): Promise<ApiResponse> => {
	try {
		const path = `${ENDPOINT}/reset-password/${resetToken}`
		const { data } = await apiClient.post(path, payload)
		return data
	} catch (error) {
		return handleApiError(error)
	}
}

export const editPassword = async (
	payload: EditPasswordDto
): Promise<ApiResponse> => {
	try {
		const path = `${ENDPOINT}/edit-password`
		const { data } = await apiClient.patch(path, payload)
		return data
	} catch (error) {
		return handleApiError(error)
	}
}

export const removeProfile = async (): Promise<ApiResponse<User | null>> => {
	try {
		const path = `${ENDPOINT}/remove-profile`
		const { data } = await apiClient.delete(path)
		return data
	} catch (error) {
		return handleApiError(error)
	}
}

export const setCurrentCar = async (
	payload: CurrentCarDto
): Promise<ApiResponse<User | null>> => {
	try {
		const path = `${ENDPOINT}/set-current-car`
		const { data } = await apiClient.patch(path, payload)
		return data
	} catch (error) {
		return handleApiError(error)
	}
}

export const setPassword = async (
	payload: SetPasswordDto
): Promise<ApiResponse> => {
	try {
		const path = `${ENDPOINT}/set-password`
		const { data } = await apiClient.patch(path, payload)
		return data
	} catch (error) {
		return handleApiError(error)
	}
}
