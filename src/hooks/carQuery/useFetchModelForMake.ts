import { UseQueryResult, useQuery } from '@tanstack/react-query'

import { getModelsForMake } from '@/api/carQueryApi'

import { CarQueryKey, ModelKey } from '@/config/queryKeys'

import { FetchModelsParams } from '@/types/params/FetchModelsParams'
import { ApiResponse } from '@/types/types/ApiResponse'
import { Model } from '@/types/types/CarQuery'

export const useFetchModelForMake = ({
	make,
	year,
}: FetchModelsParams): UseQueryResult<ApiResponse<Model[]>> => {
	return useQuery({
		queryKey: [CarQueryKey, ModelKey, make, year],
		queryFn: async () => {
			if (!make || !year) throw new Error('No make or year provided')

			const response = await getModelsForMake({ make, year })

			if (response.success) return response
		},

		enabled: Boolean(make) && Boolean(year),
	})
}
