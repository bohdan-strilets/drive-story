import { useMutation } from '@tanstack/react-query'

import { create } from '@/api/inspectionApi'

import { queryClient } from '@/config/queryClient'
import { CarKey, InspectionKey } from '@/config/queryKeys'

import { InspectionDto } from '@/types/dto/InspectionDto'
import { AddParams } from '@/types/params/AddParams'
import { ApiResponse } from '@/types/types/ApiResponse'
import { Inspection } from '@/types/types/Inspection'

export const useCreateInsspection = () => {
	return useMutation<
		ApiResponse<Inspection | null>,
		unknown,
		AddParams<InspectionDto>
	>({
		mutationFn: (params) => create(params),
		onSuccess: (response, { carId }) => {
			if (response.success) {
				queryClient.invalidateQueries({ queryKey: [InspectionKey] })
				queryClient.invalidateQueries({ queryKey: [CarKey, carId] })
			}
		},
	})
}
