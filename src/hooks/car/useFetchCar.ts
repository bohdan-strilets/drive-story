import { UseQueryResult, useQuery } from '@tanstack/react-query'

import { getById } from '@/api/carApi'

import { CarKey } from '@/config/queryKeys'

import { CarEntity } from '@/types/types/CarEntity'

export const useFetchCar = (
	carId?: string
): UseQueryResult<CarEntity | undefined, unknown> => {
	return useQuery({
		queryKey: [CarKey, carId],
		queryFn: async () => {
			if (!carId) {
				throw new Error('No carId provided')
			}

			const response = await getById(carId)
			if (response.success) {
				return response.data
			}
		},

		enabled: Boolean(carId),
	})
}
