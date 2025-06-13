import { useMutation } from '@tanstack/react-query'

import { remove } from '@/api/refuelingApi'

import { queryClient } from '@/config/queryClient'
import { CarKey, FuelingKey, ListKey } from '@/config/queryKeys'

import { ApiResponse } from '@/types/types/ApiResponse'
import { Fueling } from '@/types/types/Fueling'

export const useDeleteFueling = () => {
	return useMutation<ApiResponse<Fueling | null>, unknown, string | undefined>({
		mutationFn: (fuelingId) => remove(fuelingId),
		onSuccess: (response, fuelingId) => {
			if (response.success) {
				queryClient.invalidateQueries({ queryKey: [FuelingKey, ListKey] })
				queryClient.invalidateQueries({ queryKey: [CarKey] })
				queryClient.removeQueries({
					queryKey: [FuelingKey, fuelingId],
					exact: true,
				})
			}
		},
	})
}
