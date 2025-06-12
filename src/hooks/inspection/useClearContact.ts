import { useMutation } from '@tanstack/react-query'

import { clearContact } from '@/api/inspectionApi'

import { queryClient } from '@/config/queryClient'
import { InspectionKey } from '@/config/queryKeys'

import { ApiResponse } from '@/types/types/ApiResponse'
import { Inspection } from '@/types/types/Inspection'

export const useClearContact = () => {
	return useMutation<
		ApiResponse<Inspection | null>,
		unknown,
		string | undefined
	>({
		mutationFn: (inspectionId) => clearContact(inspectionId),
		onSuccess: (response) => {
			if (response.success) {
				queryClient.invalidateQueries({ queryKey: [InspectionKey] })
			}
		},
	})
}
