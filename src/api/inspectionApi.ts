import apiClient from '@/config/axiosConfig'

import { handleApiError } from '@/utils/handleApiError'

import { AddInspectionParams } from '@/types/params/AddInspectionParams'
import { InspectionPathParams } from '@/types/params/InspectionPathParams'
import { ListInspectionParams } from '@/types/params/ListInspectionParams'
import { UpdateInspectionParams } from '@/types/params/UpdateInspectionParams'
import { ApiResponse } from '@/types/types/ApiResponse'
import { Inspection } from '@/types/types/Inspection'
import { PaginatedResponse } from '@/types/types/PaginatedResponse'

const ENDPOINT = '/inspection'

export const create = async ({
	payload,
	carId,
}: AddInspectionParams): Promise<ApiResponse<Inspection | null>> => {
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
	carId,
	inspectionId,
}: UpdateInspectionParams): Promise<ApiResponse<Inspection | null>> => {
	try {
		const path = `${ENDPOINT}/update/${carId}/${inspectionId}`
		const { data } = await apiClient.patch(path, payload)
		return data
	} catch (error) {
		return handleApiError(error)
	}
}

export const remove = async ({
	carId,
	inspectionId,
}: InspectionPathParams): Promise<ApiResponse<Inspection | null>> => {
	try {
		const path = `${ENDPOINT}/delete/${carId}/${inspectionId}`
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
