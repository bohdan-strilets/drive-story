import { useMutation } from '@tanstack/react-query'

import { setPassword } from '@/api/userApi'

import { queryClient } from '@/config/queryClient'
import { UserKey } from '@/config/queryKeys'

import { SetPasswordDto } from '@/types/dto/SetPasswordDto'
import { ApiResponse } from '@/types/types/ApiResponse'

export const useSetPassword = () => {
	return useMutation<ApiResponse, unknown, SetPasswordDto>({
		mutationFn: (dto) => setPassword(dto),
		onSuccess: (response) => {
			if (response.success) {
				queryClient.invalidateQueries({ queryKey: [UserKey] })
			}
		},
	})
}
