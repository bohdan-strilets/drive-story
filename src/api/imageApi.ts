import apiClient from '@/config/axiosConfig'

import { handleApiError } from '@/utils/handleApiError'

import { DeleteImageParams } from '@/types/params/DeleteImageParams'
import { DeleteImagesParams } from '@/types/params/DeleteImagesParams'
import { SelectImageParams } from '@/types/params/SelectImageParams'
import { UploadImageParams } from '@/types/params/UploadImageParams'
import { ApiResponse } from '@/types/types/ApiResponse'
import { Image } from '@/types/types/Image'

const ENDPOINT = '/image'

export const upload = async ({
	file,
	entityId,
	entityType,
}: UploadImageParams): Promise<ApiResponse<Image | null>> => {
	try {
		const path = `${ENDPOINT}/upload/${entityId}`
		const params = { entityType }
		const { data } = await apiClient.post(path, file, { params })
		return data
	} catch (error) {
		return handleApiError(error)
	}
}

export const remove = async ({
	entityId,
	entityType,
	publicId,
}: DeleteImageParams): Promise<ApiResponse<Image | null>> => {
	try {
		const path = `${ENDPOINT}/delete/${entityId}`
		const params = { entityType, publicId }
		const { data } = await apiClient.delete(path, { params })
		return data
	} catch (error) {
		return handleApiError(error)
	}
}

export const select = async ({
	entityId,
	entityType,
	publicId,
}: SelectImageParams): Promise<ApiResponse<Image | null>> => {
	try {
		const path = `${ENDPOINT}/select/${entityId}`
		const params = { entityType, publicId }
		const { data } = await apiClient.patch(path, null, { params })
		return data
	} catch (error) {
		return handleApiError(error)
	}
}

export const removeAll = async ({
	entityId,
	imageId,
	entityType,
}: DeleteImagesParams): Promise<ApiResponse<Image | null>> => {
	try {
		const path = `${ENDPOINT}/delete-all/${entityId}/${imageId}`
		const params = { entityType }
		const { data } = await apiClient.delete(path, { params })
		return data
	} catch (error) {
		return handleApiError(error)
	}
}
