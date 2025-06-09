import { UseQueryResult, useQuery } from '@tanstack/react-query'

import { getMakes } from '@/api/carQueryApi'

import { CarQueryKey } from '@/config/queryKeys'

import { MakeResponse } from '@/types/types/CarQuery'

export const useFetchMakes = (
	year?: string
): UseQueryResult<MakeResponse | undefined, unknown> => {
	return useQuery({
		queryKey: [CarQueryKey],
		queryFn: async () => {
			const response = await getMakes(year)
			return response
		},
	})
}
