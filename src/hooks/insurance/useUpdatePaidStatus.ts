import { useMutation } from '@tanstack/react-query'

import { updatePaidStatus } from '@/api/insuranceApi'

import { queryClient } from '@/config/queryClient'
import { InsuranceKey } from '@/config/queryKeys'

import { UpdatePaidStatusParams } from '@/types/params/UpdatePaidStatusParams'
import { ApiResponse } from '@/types/types/ApiResponse'
import { Insurance } from '@/types/types/Insurance'

export const useUpdatePaidStatus = () => {
	return useMutation<
		ApiResponse<Insurance | null>,
		unknown,
		UpdatePaidStatusParams
	>({
		mutationFn: (dto) => updatePaidStatus(dto),
		onSuccess: (response, { insuranceId }) => {
			if (response.success) {
				queryClient.invalidateQueries({ queryKey: [InsuranceKey, insuranceId] })
			}
		},
	})
}
