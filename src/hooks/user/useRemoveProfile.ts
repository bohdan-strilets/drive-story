import { useMutation } from '@tanstack/react-query'

import { removeProfile } from '@/api/userApi'

import { queryClient } from '@/config/queryClient'
import {
	AuthKey,
	CarKey,
	CarQueryKey,
	ContactKey,
	CountryKey,
	FuelingKey,
	ImageKey,
	InspectionKey,
	InsuranceKey,
	MakeKey,
	ModelKey,
	TrimKey,
	UserKey,
} from '@/config/queryKeys'

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
				queryClient.removeQueries({ queryKey: [AuthKey], exact: true })
				queryClient.removeQueries({ queryKey: [UserKey], exact: true })
				queryClient.removeQueries({ queryKey: [ImageKey], exact: true })
				queryClient.removeQueries({ queryKey: [CarKey], exact: true })
				queryClient.removeQueries({ queryKey: [InsuranceKey], exact: true })
				queryClient.removeQueries({ queryKey: [InspectionKey], exact: true })
				queryClient.removeQueries({ queryKey: [ContactKey], exact: true })
				queryClient.removeQueries({ queryKey: [CarQueryKey], exact: true })
				queryClient.removeQueries({ queryKey: [MakeKey], exact: true })
				queryClient.removeQueries({ queryKey: [ModelKey], exact: true })
				queryClient.removeQueries({ queryKey: [TrimKey], exact: true })
				queryClient.removeQueries({ queryKey: [CountryKey], exact: true })
				queryClient.removeQueries({ queryKey: [FuelingKey], exact: true })

				setUser(null)
				setToken(null)
				setIsLoggedIn(false)
			}
		},
	})
}
