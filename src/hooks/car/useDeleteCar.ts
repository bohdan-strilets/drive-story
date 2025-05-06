import { useMutation } from '@tanstack/react-query'

import { remove } from '@/api/carApi'

import { queryClient } from '@/config/queryClient'
import { CarKey } from '@/config/queryKeys'

import { ApiResponse } from '@/types/types/ApiResponse'
import { CarEntity } from '@/types/types/CarEntity'

export const useDeleteCar = () => {
	return useMutation<ApiResponse<CarEntity | null>, unknown, string>({
		mutationFn: (carId) => remove(carId),
		onSuccess: (response) => {
			if (response.success) {
				queryClient.invalidateQueries({ queryKey: [CarKey] })
			}
		},
	})
}
