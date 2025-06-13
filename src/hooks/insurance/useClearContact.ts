import { useMutation } from '@tanstack/react-query'

import { clearContact } from '@/api/insuranceApi'

import { queryClient } from '@/config/queryClient'
import { InsuranceKey } from '@/config/queryKeys'

import { ApiResponse } from '@/types/types/ApiResponse'
import { Insurance } from '@/types/types/Insurance'

export const useClearContact = () => {
	return useMutation<
		ApiResponse<Insurance | null>,
		unknown,
		string | undefined
	>({
		mutationFn: (insuranceId) => clearContact(insuranceId),
		onSuccess: (response, insuranceId) => {
			if (response.success) {
				queryClient.invalidateQueries({ queryKey: [InsuranceKey, insuranceId] })
			}
		},
	})
}
