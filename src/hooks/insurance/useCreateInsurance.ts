import { useMutation } from '@tanstack/react-query'

import { create } from '@/api/insuranceApi'

import { queryClient } from '@/config/queryClient'
import { InsuranceKey } from '@/config/queryKeys'

import { AddInsuranceDto } from '@/types/dto/AddInsuranceDto'
import { ApiResponse } from '@/types/types/ApiResponse'
import { InsurancePolicy } from '@/types/types/InsurancePolicy'

export const useCreateInsurance = () => {
	return useMutation<
		ApiResponse<InsurancePolicy | null>,
		unknown,
		AddInsuranceDto
	>({
		mutationFn: (dto) => create(dto),
		onSuccess: (response) => {
			if (response.success) {
				queryClient.invalidateQueries({ queryKey: [InsuranceKey] })
			}
		},
	})
}
