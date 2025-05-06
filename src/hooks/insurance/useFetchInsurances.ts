import { useQuery } from '@tanstack/react-query'

import { getAll } from '@/api/insuranceApi'

import { InsuranceKey } from '@/config/queryKeys'

import { ListInsuranceParams } from '@/types/params/ListInsuranceParams'

export const useFetchInsurances = (params: ListInsuranceParams) => {
	return useQuery({
		queryKey: [InsuranceKey, params.page, params.limit],
		queryFn: async () => {
			const response = await getAll(params)
			if (response.success) {
				return response.data
			}
		},
	})
}
