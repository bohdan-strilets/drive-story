import { useMutation } from '@tanstack/react-query'

import { editProfile } from '@/api/userApi'

import { queryClient } from '@/config/queryClient'
import { UserKey } from '@/config/queryKeys'

import { useUserStore } from '@/store/useUserStore'

import { ProfileDto } from '@/types/dto/ProfileDto'
import { ApiResponse } from '@/types/types/ApiResponse'
import { User } from '@/types/types/User'

export const useEditProfile = () => {
	const setUser = useUserStore((state) => state.setUser)

	return useMutation<ApiResponse<User | null>, unknown, ProfileDto>({
		mutationFn: (dto) => editProfile(dto),
		onSuccess: (response) => {
			if (response.success) {
				setUser(response.data || null)
				queryClient.invalidateQueries({ queryKey: [UserKey] })
			}
		},
	})
}
