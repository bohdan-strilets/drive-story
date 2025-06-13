import { UseQueryResult, useQuery } from '@tanstack/react-query'

import { getAll } from '@/api/insuranceApi'

import { InspectionKey, ListKey } from '@/config/queryKeys'

import { ListParams } from '@/types/params/ListParams'
import { Inspection } from '@/types/types/Inspection'
import { PaginatedResponse } from '@/types/types/PaginatedResponse'

export const useFetchInspections = (
	params: ListParams
): UseQueryResult<PaginatedResponse<Inspection> | undefined, unknown> => {
	return useQuery({
		queryKey: [InspectionKey, ListKey],
		queryFn: async () => {
			const response = await getAll(params)
			if (response.success) {
				return response.data
			}
		},
	})
}
