import { useQuery } from '@tanstack/react-query'

import { getById } from '@/api/insuranceApi'

import { InsuranceKey } from '@/config/queryKeys'

import { InsurancePathParams } from '@/types/params/InsurancePathParams'

export const useFetchInsurance = (params: InsurancePathParams) => {
	return useQuery({
		queryKey: [InsuranceKey, params],
		queryFn: async () => {
			const response = await getById(params)
			if (response.success) {
				return response.data
			}
		},
	})
}
