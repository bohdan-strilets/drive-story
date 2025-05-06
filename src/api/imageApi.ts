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
		const { data } = await apiClient.post(
			`${ENDPOINT}/upload/${entityId}`,
			file,
			{ params: { entityType } }
		)
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
		const { data } = await apiClient.delete(`${ENDPOINT}/delete/${entityId}`, {
			params: { entityType, publicId },
		})
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
		const { data } = await apiClient.patch(
			`${ENDPOINT}/select/${entityId}`,
			null,
			{ params: { entityType, publicId } }
		)
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
		const { data } = await apiClient.delete(
			`${ENDPOINT}/delete-all/${entityId}/${imageId}`,
			{ params: { entityType } }
		)
		return data
	} catch (error) {
		return handleApiError(error)
	}
}
