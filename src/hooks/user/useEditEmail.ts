import { useMutation } from '@tanstack/react-query'

import { editEmail } from '@/api/userApi'

import { queryClient } from '@/config/queryClient'
import { UserKey } from '@/config/queryKeys'

import { useUserStore } from '@/store/useUserStore'

import { EmailDto } from '@/types/dto/EmailDto'
import { ApiResponse } from '@/types/types/ApiResponse'
import { User } from '@/types/types/User'

export const useEditEmail = () => {
	const setUser = useUserStore((state) => state.setUser)

	return useMutation<ApiResponse<User | null>, unknown, EmailDto>({
		mutationFn: (dto) => editEmail(dto),
		onSuccess: (response) => {
			if (response.success) {
				setUser(response.data || null)
				queryClient.invalidateQueries({ queryKey: [UserKey] })
			}
		},
	})
}
