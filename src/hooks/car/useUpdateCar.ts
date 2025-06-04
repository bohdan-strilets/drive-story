import { useMutation } from '@tanstack/react-query'

import { update } from '@/api/carApi'

import { queryClient } from '@/config/queryClient'
import { CarKey } from '@/config/queryKeys'

import { CarDetailsDto } from '@/types/dto/CarDetailsDto'
import { UpdateParams } from '@/types/params/UpdateParams'
import { ApiResponse } from '@/types/types/ApiResponse'
import { CarEntity } from '@/types/types/CarEntity'

export const useUpdateCar = () => {
	return useMutation<
		ApiResponse<CarEntity | null>,
		unknown,
		UpdateParams<CarDetailsDto>
	>({
		mutationFn: (params) => update(params),
		onSuccess: (response) => {
			if (response.success) {
				queryClient.invalidateQueries({ queryKey: [CarKey] })
			}
		},
	})
}
