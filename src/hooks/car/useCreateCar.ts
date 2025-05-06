import { useMutation } from '@tanstack/react-query'

import { create } from '@/api/carApi'

import { queryClient } from '@/config/queryClient'
import { CarKey } from '@/config/queryKeys'

import { CarDetailsDto } from '@/types/dto/CarDetailsDto'
import { ApiResponse } from '@/types/types/ApiResponse'
import { CarEntity } from '@/types/types/CarEntity'

export const useCreateCar = () => {
	return useMutation<ApiResponse<CarEntity | null>, unknown, CarDetailsDto>({
		mutationFn: (dto) => create(dto),
		onSuccess: (response) => {
			if (response.success) {
				queryClient.invalidateQueries({ queryKey: [CarKey] })
			}
		},
	})
}
