import { UseQueryResult, useQuery } from '@tanstack/react-query'

import { getAll } from '@/api/insuranceApi'

import { InsuranceKey, ListKey } from '@/config/queryKeys'

import { ListParams } from '@/types/params/ListParams'
import { Insurance } from '@/types/types/Insurance'
import { PaginatedResponse } from '@/types/types/PaginatedResponse'

export const useFetchInsurances = (
	params: ListParams
): UseQueryResult<PaginatedResponse<Insurance> | undefined, unknown> => {
	return useQuery({
		queryKey: [InsuranceKey, ListKey],
		queryFn: async () => {
			const response = await getAll(params)
			if (response.success) {
				return response.data
			}
		},
	})
}
