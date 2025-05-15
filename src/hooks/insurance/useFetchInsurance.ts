import { UseQueryResult, useQuery } from '@tanstack/react-query'

import { getByCar } from '@/api/insuranceApi'

import { InsuranceKey } from '@/config/queryKeys'

import { Insurance } from '@/types/types/Insurance'

export const useFetchInsurance = (
	carId?: string
): UseQueryResult<Insurance | undefined, unknown> => {
	return useQuery({
		queryKey: [InsuranceKey, carId],
		queryFn: async () => {
			if (!carId) {
				throw new Error('No carId provided')
			}

			const response = await getByCar(carId)
			if (response.success) {
				return response.data
			}
		},

		enabled: Boolean(carId),
	})
}
