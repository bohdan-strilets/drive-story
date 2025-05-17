import apiClient from '@/config/axiosConfig'

import { handleApiError } from '@/utils/handleApiError'

import { AddInsuranceParams } from '@/types/params/AddInsuranceParams'
import { InsurancePathParams } from '@/types/params/InsurancePathParams'
import { ListInsuranceParams } from '@/types/params/ListInsuranceParams'
import { UpdateInsuranceParams } from '@/types/params/UpdateInsuranceParams'
import { ApiResponse } from '@/types/types/ApiResponse'
import { Insurance } from '@/types/types/Insurance'
import { PaginatedResponse } from '@/types/types/PaginatedResponse'

const ENDPOINT = '/insurance'

export const create = async ({
	payload,
	carId,
}: AddInsuranceParams): Promise<ApiResponse<Insurance | null>> => {
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
	insuranceId,
}: UpdateInsuranceParams): Promise<ApiResponse<Insurance | null>> => {
	try {
		const { data } = await apiClient.patch(
			`${ENDPOINT}/update/${carId}/${insuranceId}`,
			payload
		)
		return data
	} catch (error) {
		return handleApiError(error)
	}
}

export const remove = async ({
	carId,
	insuranceId,
}: InsurancePathParams): Promise<ApiResponse<Insurance | null>> => {
	try {
		const { data } = await apiClient.delete(
			`${ENDPOINT}/delete/${carId}/${insuranceId}`
		)
		return data
	} catch (error) {
		return handleApiError(error)
	}
}

export const getById = async (
	insuranceId: string
): Promise<ApiResponse<Insurance | null>> => {
	try {
		const { data } = await apiClient.get(`${ENDPOINT}/get-by-id/${insuranceId}`)
		return data
	} catch (error) {
		return handleApiError(error)
	}
}

export const getAll = async ({
	carId,
	pagination,
}: ListInsuranceParams): Promise<
	ApiResponse<PaginatedResponse<Insurance> | null>
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
