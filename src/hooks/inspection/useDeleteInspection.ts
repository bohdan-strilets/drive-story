import { useMutation } from '@tanstack/react-query'

import { remove } from '@/api/inspectionApi'

import { queryClient } from '@/config/queryClient'
import { CarKey, InspectionKey, ListKey } from '@/config/queryKeys'

import { ApiResponse } from '@/types/types/ApiResponse'
import { Inspection } from '@/types/types/Inspection'

export const useDeleteInspection = () => {
	return useMutation<
		ApiResponse<Inspection | null>,
		unknown,
		string | undefined
	>({
		mutationFn: (inspectionId) => remove(inspectionId),
		onSuccess: (response, inspectionId) => {
			if (response.success) {
				queryClient.invalidateQueries({ queryKey: [InspectionKey, ListKey] })
				queryClient.invalidateQueries({ queryKey: [CarKey] })
				queryClient.removeQueries({
					queryKey: [InspectionKey, inspectionId],
					exact: true,
				})
			}
		},
	})
}
