import { useMutation } from '@tanstack/react-query'

import { remove } from '@/api/insuranceApi'

import { queryClient } from '@/config/queryClient'
import { CarKey, InsuranceKey, ListKey } from '@/config/queryKeys'

import { ApiResponse } from '@/types/types/ApiResponse'
import { Insurance } from '@/types/types/Insurance'

export const useDeleteInsurance = () => {
	return useMutation<
		ApiResponse<Insurance | null>,
		unknown,
		string | undefined
	>({
		mutationFn: (insuranceId) => remove(insuranceId),
		onSuccess: (response, insuranceId) => {
			if (response.success) {
				queryClient.invalidateQueries({ queryKey: [InsuranceKey, ListKey] })
				queryClient.invalidateQueries({ queryKey: [CarKey] })
				queryClient.removeQueries({
					queryKey: [InsuranceKey, insuranceId],
					exact: true,
				})
			}
		},
	})
}
