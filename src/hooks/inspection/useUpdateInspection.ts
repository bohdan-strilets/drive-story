import { useMutation } from '@tanstack/react-query'

import { update } from '@/api/inspectionApi'

import { queryClient } from '@/config/queryClient'
import { InspectionKey } from '@/config/queryKeys'

import { UpdateInspectionParams } from '@/types/params/UpdateInspectionParams'
import { ApiResponse } from '@/types/types/ApiResponse'
import { Inspection } from '@/types/types/Inspection'

export const useUpdateInspection = () => {
	return useMutation<
		ApiResponse<Inspection | null>,
		unknown,
		UpdateInspectionParams
	>({
		mutationFn: (dto) => update(dto),
		onSuccess: (response) => {
			if (response.success) {
				queryClient.invalidateQueries({ queryKey: [InspectionKey] })
			}
		},
	})
}
