import { useMutation } from '@tanstack/react-query'

import { bindContact } from '@/api/refuelingApi'

import { queryClient } from '@/config/queryClient'
import { FuelingKey } from '@/config/queryKeys'

import { BindContactParams } from '@/types/params/BindContactParams'
import { ApiResponse } from '@/types/types/ApiResponse'
import { Fueling } from '@/types/types/Fueling'

export const useBindContact = () => {
	return useMutation<ApiResponse<Fueling | null>, unknown, BindContactParams>({
		mutationFn: (params) => bindContact(params),
		onSuccess: (response) => {
			if (response.success) {
				queryClient.invalidateQueries({ queryKey: [FuelingKey] })
			}
		},
	})
}
