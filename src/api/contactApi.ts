import apiClient from '@/config/axiosConfig'

import { handleApiError } from '@/utils/handleApiError'

import { ContactDto } from '@/types/dto/ContactDto'
import { PaginationParams } from '@/types/params/PaginationParams'
import { UpdateContactParams } from '@/types/params/UpdateContactParams'
import { ApiResponse } from '@/types/types/ApiResponse'
import { Contact } from '@/types/types/Contact'
import { PaginatedResponse } from '@/types/types/PaginatedResponse'

const ENDPOINT = '/contact'

export const create = async (
	payload: ContactDto
): Promise<ApiResponse<Contact | null>> => {
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
	contactId,
}: UpdateContactParams): Promise<ApiResponse<Contact | null>> => {
	try {
		const path = `${ENDPOINT}/update/${contactId}`
		const { data } = await apiClient.patch(path, payload)
		return data
	} catch (error) {
		return handleApiError(error)
	}
}

export const remove = async (
	contactId?: string
): Promise<ApiResponse<Contact | null>> => {
	try {
		const path = `${ENDPOINT}/delete/${contactId}`
		const { data } = await apiClient.delete(path)
		return data
	} catch (error) {
		return handleApiError(error)
	}
}

export const getById = async (
	contactId: string
): Promise<ApiResponse<Contact | null>> => {
	try {
		const path = `${ENDPOINT}/get-by-id/${contactId}`
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
	ApiResponse<PaginatedResponse<Contact> | null>
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

export const filterByNameOrPhone = async ({
	page,
	limit,
	searchQuery,
}: PaginationParams): Promise<
	ApiResponse<PaginatedResponse<Contact> | null>
> => {
	try {
		const path = `${ENDPOINT}/filter`
		const params = { page, limit, searchQuery }
		const { data } = await apiClient.get(path, { params })
		return data
	} catch (error) {
		return handleApiError(error)
	}
}
