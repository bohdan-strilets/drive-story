import { UseQueryResult, useQuery } from '@tanstack/react-query'

import { getCurrentUser } from '@/api/userApi'

import { AuthKey, UserKey } from '@/config/queryKeys'

import { useAuthStore } from '@/store/useAuthStore'
import { useUserStore } from '@/store/useUserStore'

import { ApiResponse } from '@/types/types/ApiResponse'
import { User } from '@/types/types/User'

export const useGetCurrentUser = (
	isLoggedIn: boolean
): UseQueryResult<ApiResponse<User>> => {
	const setUser = useUserStore((state) => state.setUser)
	const setIsLoggedIn = useAuthStore((state) => state.setIsLoggedIn)
	const setToken = useAuthStore((state) => state.setToken)

	return useQuery({
		queryKey: [UserKey, AuthKey],
		queryFn: async () => {
			const response = await getCurrentUser()
			if (response.success && response.data) {
				setUser(response.data)
				return response
			} else {
				setUser(null)
				setToken(null)
				setIsLoggedIn(false)
				return null
			}
		},
		enabled: isLoggedIn,
	})
}
