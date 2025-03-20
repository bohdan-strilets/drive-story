import { useMutation } from '@tanstack/react-query'

import { getCurrentUser } from '@/api/userApi'

import { queryClient } from '@/config/queryClient'
import { UserKey } from '@/config/queryKeys'

import { useUserStore } from '@/store/useUserStore'

import { ApiResponse } from '@/types/types/ApiResponse'
import { User } from '@/types/types/User'

export const useGetCurrentUser = () => {
	const setUser = useUserStore((state) => state.setUser)

	return useMutation<ApiResponse<User | null>>({
		mutationFn: () => getCurrentUser(),
		onSuccess: (response) => {
			if (response.success) {
				setUser(response.data || null)
				queryClient.invalidateQueries({ queryKey: [UserKey] })
			}
		},
	})
}
