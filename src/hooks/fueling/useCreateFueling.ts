import { useMutation } from '@tanstack/react-query'

import { create } from '@/api/refuelingApi'

import { queryClient } from '@/config/queryClient'
import { CarKey, FuelingKey } from '@/config/queryKeys'

import { FuelingDto } from '@/types/dto/FuelingDto'
import { AddParams } from '@/types/params/AddParams'
import { ApiResponse } from '@/types/types/ApiResponse'
import { Fueling } from '@/types/types/Fueling'

export const useCreateFueling = () => {
	return useMutation<
		ApiResponse<Fueling | null>,
		unknown,
		AddParams<FuelingDto>
	>({
		mutationFn: (params) => create(params),
		onSuccess: (response, { carId }) => {
			if (response.success) {
				queryClient.invalidateQueries({ queryKey: [FuelingKey] })
				queryClient.invalidateQueries({ queryKey: [CarKey, carId] })
			}
		},
	})
}
