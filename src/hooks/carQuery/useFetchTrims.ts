import { UseQueryResult, useQuery } from '@tanstack/react-query'

import { getTrims } from '@/api/carQueryApi'

import { CarQueryKey, TrimKey } from '@/config/queryKeys'

import { FetchCarTrimParams } from '@/types/params/FetchCarTrimParams'
import { ApiResponse } from '@/types/types/ApiResponse'
import { CarTrim } from '@/types/types/CarQuery'

export const useFetchTrims = ({
	make,
	model,
	year,
}: FetchCarTrimParams): UseQueryResult<ApiResponse<CarTrim[]>> => {
	return useQuery({
		queryKey: [CarQueryKey, TrimKey, make, model, year],
		queryFn: async () => {
			if (!make || !model || !year) {
				throw new Error('No make, model or year provided')
			}

			const response = await getTrims({ make, model, year })

			if (response.success) return response
		},
		enabled: Boolean(make) && Boolean(model) && Boolean(year),
	})
}
