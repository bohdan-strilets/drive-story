import { useMutation } from '@tanstack/react-query'

import { update } from '@/api/insuranceApi'

import { queryClient } from '@/config/queryClient'
import { InsuranceKey } from '@/config/queryKeys'

import { UpdateInsuranceParams } from '@/types/params/UpdateInsuranceParams'
import { ApiResponse } from '@/types/types/ApiResponse'
import { Insurance } from '@/types/types/Insurance'

export const useUpdateInsurance = () => {
	return useMutation<
		ApiResponse<Insurance | null>,
		unknown,
		UpdateInsuranceParams
	>({
		mutationFn: (dto) => update(dto),
		onSuccess: (response) => {
			if (response.success) {
				queryClient.invalidateQueries({ queryKey: [InsuranceKey] })
			}
		},
	})
}
