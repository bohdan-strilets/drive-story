import { useMutation } from '@tanstack/react-query'

import { resetPassword } from '@/api/userApi'

import { queryClient } from '@/config/queryClient'
import { UserKey } from '@/config/queryKeys'

import { ResetPasswordParams } from '@/types/params/ResetPasswordParams'
import { ApiResponse } from '@/types/types/ApiResponse'

export const useResetPassword = () => {
	return useMutation<ApiResponse, unknown, ResetPasswordParams>({
		mutationFn: (params) => resetPassword(params),
		onSuccess: (response) => {
			if (response.success) {
				queryClient.invalidateQueries({ queryKey: [UserKey] })
			}
		},
	})
}
