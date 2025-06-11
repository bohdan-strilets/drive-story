import { useMutation } from '@tanstack/react-query'

import { remove } from '@/api/refuelingApi'

import { queryClient } from '@/config/queryClient'
import { CarKey, FuelingKey } from '@/config/queryKeys'

import { ApiResponse } from '@/types/types/ApiResponse'
import { Fueling } from '@/types/types/Fueling'

export const useDeleteFueling = () => {
	return useMutation<ApiResponse<Fueling | null>, unknown, string | undefined>({
		mutationFn: (fuelingId) => remove(fuelingId),
		onSuccess: (response) => {
			if (response.success) {
				queryClient.invalidateQueries({ queryKey: [FuelingKey] })
				queryClient.invalidateQueries({ queryKey: [CarKey] })
			}
		},
	})
}
