import { useMutation } from '@tanstack/react-query'

import { resendActivationEmail } from '@/api/userApi'

import { queryClient } from '@/config/queryClient'
import { UserKey } from '@/config/queryKeys'

import { EmailDto } from '@/types/dto/EmailDto'
import { ApiResponse } from '@/types/types/ApiResponse'

export const useResendActivationEmail = () => {
	return useMutation<ApiResponse, unknown, EmailDto>({
		mutationFn: (dto) => resendActivationEmail(dto),
		onSuccess: (response) => {
			if (response.success) {
				queryClient.invalidateQueries({ queryKey: [UserKey] })
			}
		},
	})
}
