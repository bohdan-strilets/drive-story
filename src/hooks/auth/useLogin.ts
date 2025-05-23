import { useMutation } from '@tanstack/react-query'

import { login } from '@/api/authApi'

import { queryClient } from '@/config/queryClient'
import { AuthKey } from '@/config/queryKeys'

import { useAuthStore } from '@/store/useAuthStore'
import { useUserStore } from '@/store/useUserStore'

import { LoginDto } from '@/types/dto/LoginDto'
import { ApiResponse } from '@/types/types/ApiResponse'
import { AuthResponse } from '@/types/types/AuthResponse'

export const useLogin = () => {
	const setUser = useUserStore((state) => state.setUser)
	const setIsLoggedIn = useAuthStore((state) => state.setIsLoggedIn)
	const setToken = useAuthStore((state) => state.setToken)

	return useMutation<ApiResponse<AuthResponse | null>, unknown, LoginDto>({
		mutationFn: (dto) => login(dto),
		onSuccess: (response) => {
			if (response.success) {
				setUser(response.data?.user || null)
				setToken(response.data?.tokens.accessToken || null)
				setIsLoggedIn(true)
				queryClient.invalidateQueries({ queryKey: [AuthKey] })
			}
		},
	})
}
