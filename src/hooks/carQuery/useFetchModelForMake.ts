import { UseQueryResult, useQuery } from '@tanstack/react-query'

import { getModelsForMake } from '@/api/carQueryApi'

import { CarQueryKey } from '@/config/queryKeys'

import { FetchModelsParams } from '@/types/params/FetchModelsParams'
import { ModelResponse } from '@/types/types/CarQuery'

export const useFetchModelForMake = ({
	make,
	year,
}: FetchModelsParams): UseQueryResult<ModelResponse | undefined, unknown> => {
	return useQuery({
		queryKey: [CarQueryKey],
		queryFn: async () => {
			const response = await getModelsForMake({ make, year })
			return response
		},
	})
}
