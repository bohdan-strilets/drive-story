import { UseQueryResult, useQuery } from '@tanstack/react-query'

import { getTrimsById } from '@/api/carQueryApi'

import { CarQueryKey, TrimKey } from '@/config/queryKeys'

import { ApiResponse } from '@/types/types/ApiResponse'
import { CarTrim } from '@/types/types/CarQuery'

export const useFetchTrimsById = (params: {
	make?: string
	model?: string
	year?: string
	trimsId?: string | null
}): UseQueryResult<ApiResponse<CarTrim>> => {
	return useQuery({
		queryKey: [CarQueryKey, TrimKey, params.trimsId],
		queryFn: async () => {
			if (!params.trimsId) {
				throw new Error('No trimsId provided')
			}

			const response = await getTrimsById(params)

			if (response.success) return response
		},
		enabled: Boolean(params.trimsId),
	})
}
