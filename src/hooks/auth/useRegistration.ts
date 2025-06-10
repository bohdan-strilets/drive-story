import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'

import { registration } from '@/api/authApi'

import { queryClient } from '@/config/queryClient'
import { AuthKey, UserKey } from '@/config/queryKeys'

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
		AxiosError,
		RegistrationDto
	>({
		mutationFn: (dto) => registration(dto),
		onSuccess: (response) => {
			if (response.success && response.data) {
				setUser(response.data?.user)
				setToken(response.data?.tokens.accessToken)
				setIsLoggedIn(true)
				queryClient.invalidateQueries({ queryKey: [UserKey] })
				queryClient.invalidateQueries({ queryKey: [AuthKey] })
			}
		},
		onError: (error) => {
			console.error('Registration error:', error)
			setUser(null)
			setToken(null)
			setIsLoggedIn(false)
		},
	})
}
