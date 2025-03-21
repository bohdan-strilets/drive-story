import { useMutation } from '@tanstack/react-query'

import { requestResetPassword } from '@/api/userApi'

import { queryClient } from '@/config/queryClient'
import { UserKey } from '@/config/queryKeys'

import { EmailDto } from '@/types/dto/EmailDto'
import { ApiResponse } from '@/types/types/ApiResponse'

export const useRequestResetPassword = () => {
	return useMutation<ApiResponse, unknown, EmailDto>({
		mutationFn: (dto) => requestResetPassword(dto),
		onSuccess: (response) => {
			if (response.success) {
				queryClient.invalidateQueries({ queryKey: [UserKey] })
			}
		},
	})
}
