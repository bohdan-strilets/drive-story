import { useMutation } from '@tanstack/react-query'

import { update } from '@/api/carApi'

import { queryClient } from '@/config/queryClient'
import { CarKey } from '@/config/queryKeys'

import { UpdateCarParams } from '@/types/params/UpdateCarParams'
import { ApiResponse } from '@/types/types/ApiResponse'
import { CarEntity } from '@/types/types/CarEntity'

export const useUpdateCar = () => {
	return useMutation<ApiResponse<CarEntity | null>, unknown, UpdateCarParams>({
		mutationFn: (dto) => update(dto),
		onSuccess: (response) => {
			if (response.success) {
				queryClient.invalidateQueries({ queryKey: [CarKey] })
			}
		},
	})
}
