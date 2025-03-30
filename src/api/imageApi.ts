import apiClient from '@/config/axiosConfig'

import { handleApiError } from '@/utils/handleApiError'

import { DeleteAllImagesDto } from '@/types/dto/DeleteAllImagesDto'
import { DeleteImageDto } from '@/types/dto/DeleteImageDto'
import { SelectImageDto } from '@/types/dto/SelectImageDto'
import { UploadImageDto } from '@/types/dto/UploadImageDto'
import { ApiResponse } from '@/types/types/ApiResponse'
import { Image } from '@/types/types/Image'

const ENDPOINT = '/image'

export const upload = async ({
	file,
	entityId,
	entityType,
}: UploadImageDto): Promise<ApiResponse<Image | null>> => {
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
}: DeleteImageDto): Promise<ApiResponse<Image | null>> => {
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
}: SelectImageDto): Promise<ApiResponse<Image | null>> => {
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
}: DeleteAllImagesDto): Promise<ApiResponse<Image | null>> => {
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
