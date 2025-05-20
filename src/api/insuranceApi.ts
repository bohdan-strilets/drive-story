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
	insuranceId,
}: UpdateInsuranceParams): Promise<ApiResponse<Insurance | null>> => {
	try {
		const path = `${ENDPOINT}/update/${carId}/${insuranceId}`
		const { data } = await apiClient.patch(path, payload)
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
		const path = `${ENDPOINT}/delete/${carId}/${insuranceId}`
		const { data } = await apiClient.delete(path)
		return data
	} catch (error) {
		return handleApiError(error)
	}
}

export const getById = async (
	insuranceId: string
): Promise<ApiResponse<Insurance | null>> => {
	try {
		const path = `${ENDPOINT}/get-by-id/${insuranceId}`
		const { data } = await apiClient.get(path)
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
