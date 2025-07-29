import apiClient from '@/config/axiosConfig'

import { handleApiError } from '@/utils/handleApiError'

import { FuelingDto } from '@/types/dto/FuelingDto'
import { AddParams } from '@/types/params/AddParams'
import { BindContactParams } from '@/types/params/BindContactParams'
import { ListParams } from '@/types/params/ListParams'
import { UpdateParams } from '@/types/params/UpdateParams'
import { ApiResponse } from '@/types/types/ApiResponse'
import { Fueling } from '@/types/types/Fueling'
import { PaginatedResponse } from '@/types/types/PaginatedResponse'

const ENDPOINT = '/fueling'

export const create = async ({
	payload,
	carId,
}: AddParams<FuelingDto>): Promise<ApiResponse<Fueling | null>> => {
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
	entityId: fuelingId,
}: UpdateParams<FuelingDto>): Promise<ApiResponse<Fueling | null>> => {
	try {
		const path = `${ENDPOINT}/update/${fuelingId}`
		const { data } = await apiClient.patch(path, payload)
		return data
	} catch (error) {
		return handleApiError(error)
	}
}

export const remove = async (
	fuelingId?: string
): Promise<ApiResponse<Fueling | null>> => {
	try {
		const path = `${ENDPOINT}/delete/${fuelingId}`
		const { data } = await apiClient.delete(path)
		return data
	} catch (error) {
		return handleApiError(error)
	}
}

export const getById = async (
	fuelingId: string
): Promise<ApiResponse<Fueling | null>> => {
	try {
		const path = `${ENDPOINT}/get-by-id/${fuelingId}`
		const { data } = await apiClient.get(path)
		return data
	} catch (error) {
		return handleApiError(error)
	}
}

export const getAll = async ({
	carId,
	pagination,
}: ListParams): Promise<ApiResponse<PaginatedResponse<Fueling> | null>> => {
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
}: BindContactParams): Promise<ApiResponse<Fueling | null>> => {
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
	fuelingId?: string
): Promise<ApiResponse<Fueling | null>> => {
	try {
		const path = `${ENDPOINT}/clear-contact/${fuelingId}`
		const { data } = await apiClient.put(path)
		return data
	} catch (error) {
		return handleApiError(error)
	}
}
