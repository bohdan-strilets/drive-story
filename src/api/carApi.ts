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
	payload: CarDetailsDto
): Promise<ApiResponse<CarEntity | null>> => {
	try {
		const path = `${ENDPOINT}/create`
		const { data } = await apiClient.post(path, payload)
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
		const path = `${ENDPOINT}/update/${carId}`
		const { data } = await apiClient.patch(path, payload)
		return data
	} catch (error) {
		return handleApiError(error)
	}
}

export const remove = async (
	carId: string
): Promise<ApiResponse<CarEntity | null>> => {
	try {
		const path = `${ENDPOINT}/delete/${carId}`
		const { data } = await apiClient.delete(path)
		return data
	} catch (error) {
		return handleApiError(error)
	}
}

export const getById = async (
	carId: string
): Promise<ApiResponse<CarEntity | null>> => {
	try {
		const path = `${ENDPOINT}/get-by-id/${carId}`
		const { data } = await apiClient.get(path)
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
		const path = `${ENDPOINT}/get-all`
		const params = { page, limit }
		const { data } = await apiClient.get(path, { params })
		return data
	} catch (error) {
		return handleApiError(error)
	}
}
