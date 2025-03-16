import { useMutation } from '@tanstack/react-query'

import { registration } from '@/api/authApi'

import { queryClient } from '@/config/queryClient'

import { useAuthStore } from '@/store/useAuthStore'
import { useUserStore } from '@/store/useUserStore'

import { RegistrationDto } from '@/types/dto/RegistrationDto'
import { ApiResponse } from '@/types/types/ApiResponse'
import { AuthResponse } from '@/types/types/AuthResponse'

export const useRegistration = () => {
	const setUser = useUserStore((state) => state.setUser)
	const setIsLoggedIn = useAuthStore((state) => state.setIsLoggedIn)
	const setToken = useAuthStore((state) => state.setToken)

	return useMutation<
		ApiResponse<AuthResponse | null>,
		unknown,
		RegistrationDto
	>({
		mutationFn: (dto) => registration(dto),
		onSuccess: (response) => {
			if (response.success) {
				setUser(response.data?.user || null)
				setToken(response.data?.tokens.accessToken || null)
				setIsLoggedIn(true)
				queryClient.invalidateQueries({ queryKey: ['auth'] })
			}
		},
	})
}
