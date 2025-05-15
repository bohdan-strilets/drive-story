import { useMutation } from '@tanstack/react-query'

import { create } from '@/api/insuranceApi'

import { queryClient } from '@/config/queryClient'
import { InsuranceKey } from '@/config/queryKeys'

import { AddInsuranceParams } from '@/types/params/AddInsuranceParams'
import { ApiResponse } from '@/types/types/ApiResponse'
import { Insurance } from '@/types/types/Insurance'

export const useCreateInsurance = () => {
	return useMutation<
		ApiResponse<Insurance | null>,
		unknown,
		AddInsuranceParams
	>({
		mutationFn: (dto) => create(dto),
		onSuccess: (response) => {
			if (response.success) {
				queryClient.invalidateQueries({ queryKey: [InsuranceKey] })
			}
		},
	})
}
