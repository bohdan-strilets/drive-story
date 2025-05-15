import { UseQueryResult, useQuery } from '@tanstack/react-query'

import { getAll } from '@/api/insuranceApi'

import { InsuranceKey } from '@/config/queryKeys'

import { ListInsuranceParams } from '@/types/params/ListInsuranceParams'
import { Insurance } from '@/types/types/Insurance'
import { PaginatedResponse } from '@/types/types/PaginatedResponse'

export const useFetchInsurances = (
	params: ListInsuranceParams
): UseQueryResult<PaginatedResponse<Insurance> | undefined, unknown> => {
	return useQuery({
		queryKey: [InsuranceKey, params.pagination.page, params.pagination.limit],
		queryFn: async () => {
			const response = await getAll(params)
			if (response.success) {
				return response.data
			}
		},
	})
}
