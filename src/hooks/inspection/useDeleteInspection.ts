import { useMutation } from '@tanstack/react-query'

import { remove } from '@/api/inspectionApi'

import { queryClient } from '@/config/queryClient'
import { CarKey, InspectionKey } from '@/config/queryKeys'

import { InspectionPathParams } from '@/types/params/InspectionPathParams'
import { ApiResponse } from '@/types/types/ApiResponse'
import { Inspection } from '@/types/types/Inspection'

export const useDeleteInspection = () => {
	return useMutation<
		ApiResponse<Inspection | null>,
		unknown,
		InspectionPathParams
	>({
		mutationFn: (params) => remove(params),
		onSuccess: (response, { carId }) => {
			if (response.success) {
				queryClient.invalidateQueries({ queryKey: [InspectionKey] })
				queryClient.invalidateQueries({ queryKey: [CarKey, carId] })
			}
		},
	})
}
