import { UseQueryResult, useQuery } from '@tanstack/react-query'

import { getMakes } from '@/api/carQueryApi'

import { CarQueryKey, MakeKey } from '@/config/queryKeys'

import { ApiResponse } from '@/types/types/ApiResponse'
import { Make } from '@/types/types/CarQuery'

export const useFetchMakes = (
	year?: string
): UseQueryResult<ApiResponse<Make[]>> => {
	return useQuery({
		queryKey: [CarQueryKey, MakeKey],
		queryFn: async () => {
			const response = await getMakes(year)
			if (response.success) return response
		},
	})
}
