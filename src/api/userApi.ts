import apiClient from '@/config/axiosConfig'

import { handleApiError } from '@/utils/handleApiError'

import { CurrentCarDto } from '@/types/dto/CurrentCarDto'
import { EditPasswordDto } from '@/types/dto/EditPasswordDto'
import { EmailDto } from '@/types/dto/EmailDto'
import { ProfileDto } from '@/types/dto/ProfileDto'
import { ResetPasswordParams } from '@/types/params/ResetPasswordParams'
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

export const resendActivationEmail = async (
	dto: EmailDto
): Promise<ApiResponse> => {
	try {
		const { data } = await apiClient.post(
			`${ENDPOINT}/request-activation-email-resend`,
			dto
		)
		return data
	} catch (error) {
		return handleApiError(error)
	}
}

export const editProfile = async (
	dto: ProfileDto
): Promise<ApiResponse<User | null>> => {
	try {
		const { data } = await apiClient.patch(`${ENDPOINT}/edit-profile`, dto)
		return data
	} catch (error) {
		return handleApiError(error)
	}
}

export const editEmail = async (
	dto: EmailDto
): Promise<ApiResponse<User | null>> => {
	try {
		const { data } = await apiClient.patch(`${ENDPOINT}/edit-email`, dto)
		return data
	} catch (error) {
		return handleApiError(error)
	}
}

export const requestResetPassword = async (
	dto: EmailDto
): Promise<ApiResponse> => {
	try {
		const { data } = await apiClient.post(
			`${ENDPOINT}/request-reset-password`,
			dto
		)
		return data
	} catch (error) {
		return handleApiError(error)
	}
}

export const resetPassword = async ({
	dto,
	resetToken,
}: ResetPasswordParams): Promise<ApiResponse> => {
	try {
		const { data } = await apiClient.post(
			`${ENDPOINT}/reset-password/${resetToken}`,
			dto
		)
		return data
	} catch (error) {
		return handleApiError(error)
	}
}

export const editPassword = async (
	dto: EditPasswordDto
): Promise<ApiResponse> => {
	try {
		const { data } = await apiClient.patch(`${ENDPOINT}/edit-password`, dto)
		return data
	} catch (error) {
		return handleApiError(error)
	}
}

export const removeProfile = async (): Promise<ApiResponse<User | null>> => {
	try {
		const { data } = await apiClient.delete(`${ENDPOINT}/remove-profile`)
		return data
	} catch (error) {
		return handleApiError(error)
	}
}

export const setCurrentCar = async (
	dto: CurrentCarDto
): Promise<ApiResponse<User | null>> => {
	try {
		const { data } = await apiClient.patch(`${ENDPOINT}/set-current-car`, dto)
		return data
	} catch (error) {
		return handleApiError(error)
	}
}
