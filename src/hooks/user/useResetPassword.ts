import { useMutation } from '@tanstack/react-query'

import { resetPassword } from '@/api/userApi'

import { queryClient } from '@/config/queryClient'
import { UserKey } from '@/config/queryKeys'

import { ResetPasswordMutationArgs } from '@/types/hooks/useResetPasswordParams'
import { ApiResponse } from '@/types/types/ApiResponse'

export const useResetPassword = () => {
	return useMutation<ApiResponse, unknown, ResetPasswordMutationArgs>({
		mutationFn: ({ dto, resetToken }) => resetPassword(dto, resetToken),
		onSuccess: (response) => {
			if (response.success) {
				queryClient.invalidateQueries({ queryKey: [UserKey] })
			}
		},
	})
}
