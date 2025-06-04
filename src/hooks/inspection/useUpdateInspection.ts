import { useMutation } from '@tanstack/react-query'

import { update } from '@/api/inspectionApi'

import { queryClient } from '@/config/queryClient'
import { InspectionKey } from '@/config/queryKeys'

import { InspectionDto } from '@/types/dto/InspectionDto'
import { UpdateParams } from '@/types/params/UpdateParams'
import { ApiResponse } from '@/types/types/ApiResponse'
import { Inspection } from '@/types/types/Inspection'

export const useUpdateInspection = () => {
	return useMutation<
		ApiResponse<Inspection | null>,
		unknown,
		UpdateParams<InspectionDto>
	>({
		mutationFn: (params) => update(params),
		onSuccess: (response) => {
			if (response.success) {
				queryClient.invalidateQueries({ queryKey: [InspectionKey] })
			}
		},
	})
}
