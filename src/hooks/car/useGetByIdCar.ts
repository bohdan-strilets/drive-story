import { useQuery } from '@tanstack/react-query'

import { getById } from '@/api/carApi'

import { CarKey } from '@/config/queryKeys'

import { useCarStore } from '@/store/useCarStore'

export const useGetByIdCar = (carId: string) => {
	const setCar = useCarStore((state) => state.setCar)

	return useQuery({
		queryKey: [CarKey, carId],
		queryFn: async () => {
			const response = await getById(carId)
			if (response.success) {
				setCar(response.data || null)
				return response.data
			}
		},
	})
}
