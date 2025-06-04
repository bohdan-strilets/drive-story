import { useMutation } from '@tanstack/react-query'

import { updatePaidStatus } from '@/api/insuranceApi'

import { queryClient } from '@/config/queryClient'
import { InsuranceKey } from '@/config/queryKeys'

import { PaidStatusDto } from '@/types/dto/PaidStatusDto'
import { UpdateParams } from '@/types/params/UpdateParams'
import { ApiResponse } from '@/types/types/ApiResponse'
import { Insurance } from '@/types/types/Insurance'

export const useUpdatePaidStatus = () => {
	return useMutation<
		ApiResponse<Insurance | null>,
		unknown,
		UpdateParams<PaidStatusDto>
	>({
		mutationFn: (params) => updatePaidStatus(params),
		onSuccess: (response) => {
			if (response.success) {
				queryClient.invalidateQueries({ queryKey: [InsuranceKey] })
			}
		},
	})
}
