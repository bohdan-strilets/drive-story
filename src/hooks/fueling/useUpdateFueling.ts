import { useMutation } from '@tanstack/react-query'

import { update } from '@/api/refuelingApi'

import { queryClient } from '@/config/queryClient'
import { FuelingKey } from '@/config/queryKeys'

import { FuelingDto } from '@/types/dto/FuelingDto'
import { UpdateParams } from '@/types/params/UpdateParams'
import { ApiResponse } from '@/types/types/ApiResponse'
import { Fueling } from '@/types/types/Fueling'

export const useUpdateFueling = () => {
	return useMutation<
		ApiResponse<Fueling | null>,
		unknown,
		UpdateParams<FuelingDto>
	>({
		mutationFn: (params) => update(params),
		onSuccess: (response) => {
			if (response.success) {
				queryClient.invalidateQueries({ queryKey: [FuelingKey] })
			}
		},
	})
}
