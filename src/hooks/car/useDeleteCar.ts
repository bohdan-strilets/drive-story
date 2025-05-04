import { useMutation } from '@tanstack/react-query'

import { remove } from '@/api/carApi'

import { queryClient } from '@/config/queryClient'
import { CarKey } from '@/config/queryKeys'

import { ApiResponse } from '@/types/types/ApiResponse'
import { Car } from '@/types/types/Car'

export const useDeleteCar = () => {
	return useMutation<ApiResponse<Car | null>, unknown, string>({
		mutationFn: (carId) => remove(carId),
		onSuccess: (response) => {
			if (response.success) {
				queryClient.invalidateQueries({ queryKey: [CarKey] })
			}
		},
	})
}
