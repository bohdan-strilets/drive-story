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
		const { data } = await apiClient.post(
			`${ENDPOINT}/create/${carId}`,
			payload
		)
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
		const { data } = await apiClient.patch(
			`${ENDPOINT}/update/${carId}/${inspectionId}`,
			payload
		)
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
		const { data } = await apiClient.delete(
			`${ENDPOINT}/delete/${carId}/${inspectionId}`
		)
		return data
	} catch (error) {
		return handleApiError(error)
	}
}

export const getById = async (
	inspectionId: string
): Promise<ApiResponse<Inspection | null>> => {
	try {
		const { data } = await apiClient.get(
			`${ENDPOINT}/get-by-id/${inspectionId}`
		)
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
	const { page, limit } = pagination

	try {
		const { data } = await apiClient.get(`${ENDPOINT}/get-all/${carId}`, {
			params: { page, limit },
		})
		return data
	} catch (error) {
		return handleApiError(error)
	}
}
