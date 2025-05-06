import { useMutation } from '@tanstack/react-query'

import { remove } from '@/api/insuranceApi'

import { queryClient } from '@/config/queryClient'
import { InsuranceKey } from '@/config/queryKeys'

import { InsurancePathParams } from '@/types/params/InsurancePathParams'
import { ApiResponse } from '@/types/types/ApiResponse'
import { InsurancePolicy } from '@/types/types/InsurancePolicy'

export const useDeleteInsurance = () => {
	return useMutation<
		ApiResponse<InsurancePolicy | null>,
		unknown,
		InsurancePathParams
	>({
		mutationFn: (params) => remove(params),
		onSuccess: (response) => {
			if (response.success) {
				queryClient.invalidateQueries({ queryKey: [InsuranceKey] })
			}
		},
	})
}
