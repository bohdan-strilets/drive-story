import { useMutation } from '@tanstack/react-query'

import { bindContact } from '@/api/insuranceApi'

import { queryClient } from '@/config/queryClient'
import { InsuranceKey } from '@/config/queryKeys'

import { BindContactParams } from '@/types/params/BindContactParams'
import { ApiResponse } from '@/types/types/ApiResponse'
import { Insurance } from '@/types/types/Insurance'

export const useBindContact = () => {
	return useMutation<ApiResponse<Insurance | null>, unknown, BindContactParams>(
		{
			mutationFn: (payload) => bindContact(payload),
			onSuccess: (response) => {
				if (response.success) {
					queryClient.invalidateQueries({ queryKey: [InsuranceKey] })
				}
			},
		}
	)
}
