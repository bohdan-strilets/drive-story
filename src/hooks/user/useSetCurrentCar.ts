import { useMutation } from '@tanstack/react-query'

import { setCurrentCar } from '@/api/userApi'

import { queryClient } from '@/config/queryClient'
import { UserKey } from '@/config/queryKeys'

import { useUserStore } from '@/store/useUserStore'

import { CurrentCarDto } from '@/types/dto/CurrentCarDto'
import { ApiResponse } from '@/types/types/ApiResponse'
import { User } from '@/types/types/User'

export const useSetCurrentCar = () => {
	const setUser = useUserStore((state) => state.setUser)

	return useMutation<ApiResponse<User | null>, unknown, CurrentCarDto>({
		mutationFn: (dto) => setCurrentCar(dto),
		onSuccess: (response) => {
			if (response.success) {
				setUser(response.data || null)
				queryClient.invalidateQueries({ queryKey: [UserKey] })
			}
		},
	})
}
