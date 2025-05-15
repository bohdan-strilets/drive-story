import { useMutation } from '@tanstack/react-query'

import { remove } from '@/api/insuranceApi'

import { queryClient } from '@/config/queryClient'
import { InsuranceKey } from '@/config/queryKeys'

import { InsurancePathParams } from '@/types/params/InsurancePathParams'
import { ApiResponse } from '@/types/types/ApiResponse'
import { Insurance } from '@/types/types/Insurance'

export const useDeleteInsurance = () => {
	return useMutation<
		ApiResponse<Insurance | null>,
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
