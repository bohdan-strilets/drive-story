import { useMutation } from '@tanstack/react-query'

import { update } from '@/api/insuranceApi'

import { queryClient } from '@/config/queryClient'
import { InsuranceKey } from '@/config/queryKeys'

import { InsuranceDto } from '@/types/dto/InsuranceDto'
import { UpdateParams } from '@/types/params/UpdateParams'
import { ApiResponse } from '@/types/types/ApiResponse'
import { Insurance } from '@/types/types/Insurance'

export const useUpdateInsurance = () => {
	return useMutation<
		ApiResponse<Insurance | null>,
		unknown,
		UpdateParams<InsuranceDto>
	>({
		mutationFn: (params) => update(params),
		onSuccess: (response) => {
			if (response.success) {
				queryClient.invalidateQueries({ queryKey: [InsuranceKey] })
			}
		},
	})
}
