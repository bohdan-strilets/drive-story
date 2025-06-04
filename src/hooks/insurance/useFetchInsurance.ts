import { UseQueryResult, useQuery } from '@tanstack/react-query'

import { getById } from '@/api/insuranceApi'

import { InsuranceKey } from '@/config/queryKeys'

import { Insurance } from '@/types/types/Insurance'

export const useFetchInsurance = (
	insuranceId?: string
): UseQueryResult<Insurance | undefined, unknown> => {
	return useQuery({
		queryKey: [InsuranceKey, insuranceId],
		queryFn: async () => {
			if (!insuranceId) throw new Error('No insuranceId provided')

			const response = await getById(insuranceId)

			if (response.success) return response.data
		},

		enabled: Boolean(insuranceId),
	})
}
