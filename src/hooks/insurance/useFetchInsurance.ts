import { UseQueryResult, useQuery } from '@tanstack/react-query'

import { getByCar } from '@/api/insuranceApi'

import { InsuranceKey } from '@/config/queryKeys'

import { InsurancePolicy } from '@/types/types/InsurancePolicy'

export const useFetchInsurance = (
	carId: string
): UseQueryResult<InsurancePolicy | undefined, unknown> => {
	return useQuery({
		queryKey: [InsuranceKey, carId],
		queryFn: async () => {
			const response = await getByCar(carId)
			if (response.success) {
				return response.data
			}
		},
	})
}
