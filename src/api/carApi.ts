import apiClient from '@/config/axiosConfig'

import { handleApiError } from '@/utils/handleApiError'

import { CarDetailsDto } from '@/types/dto/CarDetailsDto'
import { PaginationParams } from '@/types/params/PaginationParams'
import { UpdateCarParams } from '@/types/params/UpdateCarParams'
import { ApiResponse } from '@/types/types/ApiResponse'
import { CarEntity } from '@/types/types/CarEntity'
import { PaginatedResponse } from '@/types/types/PaginatedResponse'

const ENDPOINT = '/car'

export const create = async (
	dto: CarDetailsDto
): Promise<ApiResponse<CarEntity | null>> => {
	try {
		const { data } = await apiClient.post(`${ENDPOINT}/create`, dto)
		return data
	} catch (error) {
		return handleApiError(error)
	}
}

export const update = async ({
	payload,
	carId,
}: UpdateCarParams): Promise<ApiResponse<CarEntity | null>> => {
	try {
		const { data } = await apiClient.patch(
			`${ENDPOINT}/update/${carId}`,
			payload
		)
		return data
	} catch (error) {
		return handleApiError(error)
	}
}

export const remove = async (
	carId: string
): Promise<ApiResponse<CarEntity | null>> => {
	try {
		const { data } = await apiClient.delete(`${ENDPOINT}/delete/${carId}`)
		return data
	} catch (error) {
		return handleApiError(error)
	}
}

export const getById = async (
	carId: string
): Promise<ApiResponse<CarEntity | null>> => {
	try {
		const { data } = await apiClient.get(`${ENDPOINT}/get-by-id/${carId}`)
		return data
	} catch (error) {
		return handleApiError(error)
	}
}

export const getAll = async ({
	page,
	limit,
}: PaginationParams): Promise<
	ApiResponse<PaginatedResponse<CarEntity> | null>
> => {
	try {
		const { data } = await apiClient.get(`${ENDPOINT}/get-all`, {
			params: { page, limit },
		})
		return data
	} catch (error) {
		return handleApiError(error)
	}
}
