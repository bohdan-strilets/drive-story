import { useMutation } from '@tanstack/react-query'

import { update } from '@/api/insuranceApi'

import { queryClient } from '@/config/queryClient'
import { InsuranceKey } from '@/config/queryKeys'

import { UpdateInsuranceDto } from '@/types/dto/UpdateInsuranceDto'
import { ApiResponse } from '@/types/types/ApiResponse'
import { InsurancePolicy } from '@/types/types/InsurancePolicy'

export const useUpdateInsurance = () => {
	return useMutation<
		ApiResponse<InsurancePolicy | null>,
		unknown,
		UpdateInsuranceDto
	>({
		mutationFn: (dto) => update(dto),
		onSuccess: (response) => {
			if (response.success) {
				queryClient.invalidateQueries({ queryKey: [InsuranceKey] })
			}
		},
	})
}
