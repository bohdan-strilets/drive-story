import { useMutation } from '@tanstack/react-query'

import { remove } from '@/api/inspectionApi'

import { queryClient } from '@/config/queryClient'
import { CarKey, InspectionKey } from '@/config/queryKeys'

import { ApiResponse } from '@/types/types/ApiResponse'
import { Inspection } from '@/types/types/Inspection'

export const useDeleteInspection = () => {
	return useMutation<
		ApiResponse<Inspection | null>,
		unknown,
		string | undefined
	>({
		mutationFn: (inspectionId) => remove(inspectionId),
		onSuccess: (response) => {
			if (response.success) {
				queryClient.invalidateQueries({ queryKey: [InspectionKey] })
				queryClient.invalidateQueries({ queryKey: [CarKey] })
			}
		},
	})
}
