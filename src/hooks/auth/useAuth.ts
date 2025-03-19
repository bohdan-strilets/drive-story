import { useQuery } from '@tanstack/react-query'

import { refreshToken } from '@/api/authApi'

import { AuthKey } from '@/config/queryKeys'

import { ApiResponse } from '@/types/types/ApiResponse'
import { AuthResponse } from '@/types/types/AuthResponse'

export const useAuth = () => {
	return useQuery<ApiResponse<AuthResponse | null>>({
		queryKey: [AuthKey],
		queryFn: refreshToken,
		retry: false,
		staleTime: 1000 * 60 * 5,
	})
}
