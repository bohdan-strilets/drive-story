import { useMutation } from '@tanstack/react-query'

import { removeProfile } from '@/api/userApi'

import { queryClient } from '@/config/queryClient'
import { AuthKey, UserKey } from '@/config/queryKeys'

import { useAuthStore } from '@/store/useAuthStore'
import { useUserStore } from '@/store/useUserStore'

import { ApiResponse } from '@/types/types/ApiResponse'
import { User } from '@/types/types/User'

export const useRemoveProfile = () => {
	const setUser = useUserStore((state) => state.setUser)
	const setIsLoggedIn = useAuthStore((state) => state.setIsLoggedIn)
	const setToken = useAuthStore((state) => state.setToken)

	return useMutation<ApiResponse<User | null>>({
		mutationFn: () => removeProfile(),
		onSuccess: (response) => {
			if (response.success) {
				setUser(null)
				setToken(null)
				setIsLoggedIn(false)
				queryClient.invalidateQueries({ queryKey: [UserKey, AuthKey] })
			}
		},
	})
}
