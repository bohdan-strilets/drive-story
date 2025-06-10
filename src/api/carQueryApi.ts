import apiClient from '@/config/axiosConfig'

import { handleApiError } from '@/utils/handleApiError'

import { FetchCarTrimParams } from '@/types/params/FetchCarTrimParams'
import { FetchModelsParams } from '@/types/params/FetchModelsParams'
import { ApiResponse } from '@/types/types/ApiResponse'
import { CarTrim, Make, Model } from '@/types/types/CarQuery'

const ENDPOINT = '/car-query'

export const getMakes = async (
	year?: string
): Promise<ApiResponse<Make[] | null>> => {
	try {
		const params = { year }
		const path = `${ENDPOINT}/makes`
		const { data } = await apiClient.get(path, { params })
		return data
	} catch (error) {
		return handleApiError(error)
	}
}

export const getModelsForMake = async ({
	make,
	year,
}: FetchModelsParams): Promise<ApiResponse<Model[] | null>> => {
	try {
		const params = { make, year }
		const path = `${ENDPOINT}/models`
		const { data } = await apiClient.get(path, { params })
		return data
	} catch (error) {
		return handleApiError(error)
	}
}

export const getTrims = async ({
	make,
	model,
	year,
}: FetchCarTrimParams): Promise<ApiResponse<CarTrim[] | null>> => {
	try {
		const params = { make, model, year }
		const path = `${ENDPOINT}/trims`
		const { data } = await apiClient.get(path, { params })
		return data
	} catch (error) {
		return handleApiError(error)
	}
}

export const getTrimsById = async ({
	make,
	model,
	year,
	trimsId,
}: {
	make?: string
	model?: string
	year?: string
	trimsId?: string | null
}): Promise<ApiResponse<CarTrim | null>> => {
	try {
		const params = { make, model, year, trimsId }
		const path = `${ENDPOINT}/trims-by-id`
		const { data } = await apiClient.get(path, { params })
		return data
	} catch (error) {
		return handleApiError(error)
	}
}
