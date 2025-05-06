import { UseQueryResult, useQuery } from '@tanstack/react-query'

import { getAll } from '@/api/carApi'

import { CarKey } from '@/config/queryKeys'

import { PaginationParams } from '@/types/params/PaginationParams'
import { CarEntity } from '@/types/types/CarEntity'
import { PaginatedResponse } from '@/types/types/PaginatedResponse'

export const useFetchCars = (
	dto: PaginationParams
): UseQueryResult<PaginatedResponse<CarEntity> | undefined, unknown> => {
	return useQuery({
		queryKey: [CarKey, dto.page, dto.limit],
		queryFn: async () => {
			const response = await getAll(dto)
			if (response.success) {
				return response.data
			}
		},
	})
}
