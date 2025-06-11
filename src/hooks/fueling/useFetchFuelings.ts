import { UseQueryResult, useQuery } from '@tanstack/react-query'

import { getAll } from '@/api/refuelingApi'

import { FuelingKey } from '@/config/queryKeys'

import { ListParams } from '@/types/params/ListParams'
import { Fueling } from '@/types/types/Fueling'
import { PaginatedResponse } from '@/types/types/PaginatedResponse'

export const useFetchFuelings = (
	params: ListParams
): UseQueryResult<PaginatedResponse<Fueling> | undefined, unknown> => {
	return useQuery({
		queryKey: [FuelingKey, params.pagination.page, params.pagination.limit],
		queryFn: async () => {
			const response = await getAll(params)
			if (response.success) {
				return response
			}
		},
	})
}
