import { useMutation } from '@tanstack/react-query'

import { create } from '@/api/carApi'

import { queryClient } from '@/config/queryClient'
import { CarKey } from '@/config/queryKeys'

import { CarDto } from '@/types/dto/CarDto'
import { ApiResponse } from '@/types/types/ApiResponse'
import { Car } from '@/types/types/Car'

export const useCreateCar = () => {
	return useMutation<ApiResponse<Car | null>, unknown, CarDto>({
		mutationFn: (dto) => create(dto),
		onSuccess: (response) => {
			if (response.success) {
				queryClient.invalidateQueries({ queryKey: [CarKey] })
			}
		},
	})
}
