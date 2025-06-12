import { useMutation } from '@tanstack/react-query'

import { bindContact } from '@/api/inspectionApi'

import { queryClient } from '@/config/queryClient'
import { InspectionKey } from '@/config/queryKeys'

import { BindContactParams } from '@/types/params/BindContactParams'
import { ApiResponse } from '@/types/types/ApiResponse'
import { Inspection } from '@/types/types/Inspection'

export const useBindContact = () => {
	return useMutation<
		ApiResponse<Inspection | null>,
		unknown,
		BindContactParams
	>({
		mutationFn: (params) => bindContact(params),
		onSuccess: (response) => {
			if (response.success) {
				queryClient.invalidateQueries({ queryKey: [InspectionKey] })
			}
		},
	})
}
