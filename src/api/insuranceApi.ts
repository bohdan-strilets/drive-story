import apiClient from '@/config/axiosConfig'

import { handleApiError } from '@/utils/handleApiError'

import { AddInsuranceDto } from '@/types/dto/AddInsuranceDto'
import { UpdateInsuranceDto } from '@/types/dto/UpdateInsuranceDto'
import { InsurancePathParams } from '@/types/params/InsurancePathParams'
import { ListInsuranceParams } from '@/types/params/ListInsuranceParams'
import { ApiResponse } from '@/types/types/ApiResponse'
import { InsurancePolicy } from '@/types/types/InsurancePolicy'
import { PaginationMeta } from '@/types/types/PaginationMeta'

const ENDPOINT = '/insurance'

export const create = async ({
	dto,
	carId,
}: AddInsuranceDto): Promise<ApiResponse<InsurancePolicy | null>> => {
	try {
		const { data } = await apiClient.post(`${ENDPOINT}/create/${carId}`, dto)
		return data
	} catch (error) {
		return handleApiError(error)
	}
}

export const update = async ({
	dto,
	carId,
	insuranceId,
}: UpdateInsuranceDto): Promise<ApiResponse<InsurancePolicy | null>> => {
	try {
		const { data } = await apiClient.patch(
			`${ENDPOINT}/update/${carId}/${insuranceId}`,
			dto
		)
		return data
	} catch (error) {
		return handleApiError(error)
	}
}

export const remove = async ({
	carId,
	insuranceId,
}: InsurancePathParams): Promise<ApiResponse<InsurancePolicy | null>> => {
	try {
		const { data } = await apiClient.delete(
			`${ENDPOINT}/delete/${carId}/${insuranceId}`
		)
		return data
	} catch (error) {
		return handleApiError(error)
	}
}

export const getById = async ({
	carId,
	insuranceId,
}: InsurancePathParams): Promise<ApiResponse<InsurancePolicy | null>> => {
	try {
		const { data } = await apiClient.get(
			`${ENDPOINT}/get-by-id/${carId}/${insuranceId}`
		)
		return data
	} catch (error) {
		return handleApiError(error)
	}
}

export const getAll = async (
	params: ListInsuranceParams
): Promise<
	ApiResponse<{ data: InsurancePolicy[]; meta: PaginationMeta } | null>
> => {
	const { carId, page, limit } = params

	try {
		const { data } = await apiClient.get(`${ENDPOINT}/get-all/${carId}`, {
			params: { page, limit },
		})
		return data
	} catch (error) {
		return handleApiError(error)
	}
}
