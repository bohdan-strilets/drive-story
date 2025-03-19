import { useMutation } from '@tanstack/react-query'

import { logout } from '@/api/authApi'

import { queryClient } from '@/config/queryClient'

import { useAuthStore } from '@/store/useAuthStore'
import { useUserStore } from '@/store/useUserStore'

import { ApiResponse } from '@/types/types/ApiResponse'
import { AuthResponse } from '@/types/types/AuthResponse'

export const useLogout = () => {
	const setUser = useUserStore((state) => state.setUser)
	const setIsLoggedIn = useAuthStore((state) => state.setIsLoggedIn)
	const setToken = useAuthStore((state) => state.setToken)

	return useMutation<ApiResponse<AuthResponse | null>, unknown>({
		mutationFn: () => logout(),
		onSuccess: (response) => {
			if (response.success) {
				setUser(null)
				setToken(null)
				setIsLoggedIn(false)
				queryClient.invalidateQueries({ queryKey: ['auth'] })
			}
		},
	})
}
