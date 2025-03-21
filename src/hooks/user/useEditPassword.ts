import { useMutation } from '@tanstack/react-query'

import { editPassword } from '@/api/userApi'

import { queryClient } from '@/config/queryClient'
import { UserKey } from '@/config/queryKeys'

import { EditPasswordDto } from '@/types/dto/EditPasswordDto'
import { ApiResponse } from '@/types/types/ApiResponse'

export const useEditPassword = () => {
	return useMutation<ApiResponse, unknown, EditPasswordDto>({
		mutationFn: (dto) => editPassword(dto),
		onSuccess: (response) => {
			if (response.success) {
				queryClient.invalidateQueries({ queryKey: [UserKey] })
			}
		},
	})
}
