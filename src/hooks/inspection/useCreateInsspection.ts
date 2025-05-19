import { useMutation } from '@tanstack/react-query'

import { create } from '@/api/inspectionApi'

import { queryClient } from '@/config/queryClient'
import { CarKey, InspectionKey } from '@/config/queryKeys'

import { AddInspectionParams } from '@/types/params/AddInspectionParams'
import { ApiResponse } from '@/types/types/ApiResponse'
import { Inspection } from '@/types/types/Inspection'

export const useCreateInsspection = () => {
	return useMutation<
		ApiResponse<Inspection | null>,
		unknown,
		AddInspectionParams
	>({
		mutationFn: (dto) => create(dto),
		onSuccess: (response, { carId }) => {
			if (response.success) {
				queryClient.invalidateQueries({ queryKey: [InspectionKey] })
				queryClient.invalidateQueries({ queryKey: [CarKey, carId] })
			}
		},
	})
}
