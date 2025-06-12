import apiClient from '@/config/axiosConfig'

import { handleApiError } from '@/utils/handleApiError'

import { InsuranceDto } from '@/types/dto/InsuranceDto'
import { PaidStatusDto } from '@/types/dto/PaidStatusDto'
import { AddParams } from '@/types/params/AddParams'
import { BindContactParams } from '@/types/params/BindContactParams'
import { ListParams } from '@/types/params/ListParams'
import { UpdateParams } from '@/types/params/UpdateParams'
import { ApiResponse } from '@/types/types/ApiResponse'
import { Insurance } from '@/types/types/Insurance'
import { PaginatedResponse } from '@/types/types/PaginatedResponse'

const ENDPOINT = '/insurance'

export const create = async ({
	payload,
	carId,
}: AddParams<InsuranceDto>): Promise<ApiResponse<Insurance | null>> => {
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
	entityId: insuranceId,
}: UpdateParams<InsuranceDto>): Promise<ApiResponse<Insurance | null>> => {
	try {
		const path = `${ENDPOINT}/update/${insuranceId}`
		const { data } = await apiClient.patch(path, payload)
		return data
	} catch (error) {
		return handleApiError(error)
	}
}

export const updatePaidStatus = async ({
	payload,
	entityId: insuranceId,
}: UpdateParams<PaidStatusDto>): Promise<ApiResponse<Insurance | null>> => {
	try {
		const path = `${ENDPOINT}/update-paid-status/${insuranceId}`
		const { data } = await apiClient.patch(path, payload)
		return data
	} catch (error) {
		return handleApiError(error)
	}
}

export const remove = async (
	insuranceId?: string
): Promise<ApiResponse<Insurance | null>> => {
	try {
		const path = `${ENDPOINT}/delete/${insuranceId}`
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
}: ListParams): Promise<ApiResponse<PaginatedResponse<Insurance> | null>> => {
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

export const bindContact = async ({
	entityId,
	contactId,
}: BindContactParams): Promise<ApiResponse<Insurance | null>> => {
	try {
		const path = `${ENDPOINT}/bind-contact/${entityId}`
		const params = { contactId }
		const { data } = await apiClient.put(path, null, { params })
		return data
	} catch (error) {
		return handleApiError(error)
	}
}

export const clearContact = async (
	insuranceId?: string
): Promise<ApiResponse<Insurance | null>> => {
	try {
		const path = `${ENDPOINT}/clear-contact/${insuranceId}`
		const { data } = await apiClient.put(path)
		return data
	} catch (error) {
		return handleApiError(error)
	}
}
