import { useQuery } from '@tanstack/react-query'

import { getCurrentUser } from '@/api/userApi'

import { UserKey } from '@/config/queryKeys'

import { useUserStore } from '@/store/useUserStore'

export const useGetCurrentUser = () => {
	const setUser = useUserStore((state) => state.setUser)

	return useQuery({
		queryKey: [UserKey],
		queryFn: async () => {
			const response = await getCurrentUser()
			if (response.success) {
				setUser(response.data || null)
				return response.data
			}
		},
	})
}
