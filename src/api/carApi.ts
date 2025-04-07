import apiClient from '@/config/axiosConfig'

import { handleApiError } from '@/utils/handleApiError'

import { CarDto } from '@/types/dto/CarDto'
import { PaginationDto } from '@/types/dto/PaginationDto'
import { UpdateCarDto } from '@/types/dto/UpdateCarDto'
import { ApiResponse } from '@/types/types/ApiResponse'
import { Car } from '@/types/types/Car'

const ENDPOINT = '/car'

export const create = async (dto: CarDto): Promise<ApiResponse<Car | null>> => {
	try {
		const { data } = await apiClient.post(`${ENDPOINT}/create`, dto)
		return data
	} catch (error) {
		return handleApiError(error)
	}
}

export const update = async ({
	dto,
	carId,
}: UpdateCarDto): Promise<ApiResponse<Car | null>> => {
	try {
		const { data } = await apiClient.patch(`${ENDPOINT}/update/${carId}`, dto)
		return data
	} catch (error) {
		return handleApiError(error)
	}
}

export const remove = async (
	carId: string
): Promise<ApiResponse<Car | null>> => {
	try {
		const { data } = await apiClient.delete(`${ENDPOINT}/delete/${carId}`)
		return data
	} catch (error) {
		return handleApiError(error)
	}
}

export const getById = async (
	carId: string
): Promise<ApiResponse<Car | null>> => {
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
}: PaginationDto): Promise<ApiResponse<Car[] | null>> => {
	try {
		const { data } = await apiClient.get(`${ENDPOINT}/get-all`, {
			params: { page, limit },
		})
		return data
	} catch (error) {
		return handleApiError(error)
	}
}
