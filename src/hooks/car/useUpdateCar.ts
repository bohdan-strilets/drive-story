import { useMutation } from '@tanstack/react-query'

import { update } from '@/api/carApi'

import { queryClient } from '@/config/queryClient'
import { CarKey } from '@/config/queryKeys'

import { UpdateCarDto } from '@/types/dto/UpdateCarDto'
import { ApiResponse } from '@/types/types/ApiResponse'
import { Car } from '@/types/types/Car'

export const useUpdateCar = () => {
	return useMutation<ApiResponse<Car | null>, unknown, UpdateCarDto>({
		mutationFn: (dto) => update(dto),
		onSuccess: (response) => {
			if (response.success) {
				queryClient.invalidateQueries({ queryKey: [CarKey] })
			}
		},
	})
}
