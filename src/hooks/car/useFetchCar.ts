import { useQuery } from '@tanstack/react-query'

import { getById } from '@/api/carApi'

import { CarKey } from '@/config/queryKeys'

export const useFetchCar = (carId: string) => {
	return useQuery({
		queryKey: [CarKey, carId],
		queryFn: async () => {
			const response = await getById(carId)
			if (response.success) {
				return response.data
			}
		},
	})
}
