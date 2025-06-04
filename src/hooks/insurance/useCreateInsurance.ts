import { useMutation } from '@tanstack/react-query'

import { create } from '@/api/insuranceApi'

import { queryClient } from '@/config/queryClient'
import { CarKey, InsuranceKey } from '@/config/queryKeys'

import { InsuranceDto } from '@/types/dto/InsuranceDto'
import { AddParams } from '@/types/params/AddParams'
import { ApiResponse } from '@/types/types/ApiResponse'
import { Insurance } from '@/types/types/Insurance'

export const useCreateInsurance = () => {
	return useMutation<
		ApiResponse<Insurance | null>,
		unknown,
		AddParams<InsuranceDto>
	>({
		mutationFn: (params) => create(params),
		onSuccess: (response, { carId }) => {
			if (response.success) {
				queryClient.invalidateQueries({ queryKey: [InsuranceKey] })
				queryClient.invalidateQueries({ queryKey: [CarKey, carId] })
			}
		},
	})
}
