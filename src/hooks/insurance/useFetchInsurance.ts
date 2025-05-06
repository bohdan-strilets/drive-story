import { UseQueryResult, useQuery } from '@tanstack/react-query'

import { getById } from '@/api/insuranceApi'

import { InsuranceKey } from '@/config/queryKeys'

import { InsurancePathParams } from '@/types/params/InsurancePathParams'
import { InsurancePolicy } from '@/types/types/InsurancePolicy'

export const useFetchInsurance = (
	params: InsurancePathParams
): UseQueryResult<InsurancePolicy | undefined, unknown> => {
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
