import { useMutation } from '@tanstack/react-query'

import { remove } from '@/api/carApi'

import { queryClient } from '@/config/queryClient'
import { CarKey } from '@/config/queryKeys'

import { useCarStore } from '@/store/useCarStore'

import { ApiResponse } from '@/types/types/ApiResponse'
import { Car } from '@/types/types/Car'

export const useDeleteCar = () => {
	const setCar = useCarStore((state) => state.setCar)

	return useMutation<ApiResponse<Car | null>, unknown, string>({
		mutationFn: (carId) => remove(carId),
		onSuccess: (response) => {
			if (response.success) {
				setCar(response.data || null)
				queryClient.invalidateQueries({ queryKey: [CarKey] })
			}
		},
	})
}
