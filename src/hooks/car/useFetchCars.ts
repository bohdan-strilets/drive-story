import { UseQueryResult, useQuery } from '@tanstack/react-query'

import { getAll } from '@/api/carApi'

import { CarKey, ListKey } from '@/config/queryKeys'

import { PaginationParams } from '@/types/params/PaginationParams'
import { CarEntity } from '@/types/types/CarEntity'
import { PaginatedResponse } from '@/types/types/PaginatedResponse'

export const useFetchCars = (
	params: PaginationParams
): UseQueryResult<PaginatedResponse<CarEntity> | undefined, unknown> => {
	return useQuery({
		queryKey: [CarKey, ListKey],
		queryFn: async () => {
			const response = await getAll(params)
			if (response.success) {
				return response.data
			}
		},
	})
}
