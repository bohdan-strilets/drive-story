import apiClient from '@/config/axiosConfig'

import { handleApiError } from '@/utils/handleApiError'

import { InspectionDto } from '@/types/dto/InspectionDto'
import { AddParams } from '@/types/params/AddParams'
import { ListInspectionParams } from '@/types/params/ListInspectionParams'
import { UpdateParams } from '@/types/params/UpdateParams'
import { ApiResponse } from '@/types/types/ApiResponse'
import { Inspection } from '@/types/types/Inspection'
import { PaginatedResponse } from '@/types/types/PaginatedResponse'

const ENDPOINT = '/inspection'

export const create = async ({
	payload,
	carId,
}: AddParams<InspectionDto>): Promise<ApiResponse<Inspection | null>> => {
	try {
		const path = `${ENDPOINT}/create/${carId}`
		const { data } = await apiClient.post(path, payload)
		return data
	} catch (error) {
		return handleApiError(error)
	}
}

export const update = async ({
	payload,
	entityId: inspectionId,
}: UpdateParams<InspectionDto>): Promise<ApiResponse<Inspection | null>> => {
	try {
		const path = `${ENDPOINT}/update/${inspectionId}`
		const { data } = await apiClient.patch(path, payload)
		return data
	} catch (error) {
		return handleApiError(error)
	}
}

export const remove = async (
	inspectionId?: string
): Promise<ApiResponse<Inspection | null>> => {
	try {
		const path = `${ENDPOINT}/delete/${inspectionId}`
		const { data } = await apiClient.delete(path)
		return data
	} catch (error) {
		return handleApiError(error)
	}
}

export const getById = async (
	inspectionId: string
): Promise<ApiResponse<Inspection | null>> => {
	try {
		const path = `${ENDPOINT}/get-by-id/${inspectionId}`
		const { data } = await apiClient.get(path)
		return data
	} catch (error) {
		return handleApiError(error)
	}
}

export const getAll = async ({
	carId,
	pagination,
}: ListInspectionParams): Promise<
	ApiResponse<PaginatedResponse<Inspection> | null>
> => {
	try {
		const path = `${ENDPOINT}/get-all/${carId}`
		const { page, limit } = pagination
		const params = { page, limit }

		const { data } = await apiClient.get(path, { params })
		return data
	} catch (error) {
		return handleApiError(error)
	}
}
