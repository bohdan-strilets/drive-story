import { useMutation } from '@tanstack/react-query'

import { clearContact } from '@/api/refuelingApi'

import { queryClient } from '@/config/queryClient'
import { FuelingKey } from '@/config/queryKeys'

import { ApiResponse } from '@/types/types/ApiResponse'
import { Fueling } from '@/types/types/Fueling'

export const useClearContact = () => {
	return useMutation<ApiResponse<Fueling | null>, unknown, string | undefined>({
		mutationFn: (fuelingId) => clearContact(fuelingId),
		onSuccess: (response, fuelingId) => {
			if (response.success) {
				queryClient.invalidateQueries({
					queryKey: [FuelingKey, fuelingId],
				})
			}
		},
	})
}
