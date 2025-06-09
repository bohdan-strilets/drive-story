import { UseQueryResult, useQuery } from '@tanstack/react-query'

import { getTrims } from '@/api/carQueryApi'

import { CarQueryKey } from '@/config/queryKeys'

import { FetchCarTrimParams } from '@/types/params/FetchCarTrimParams'
import { CarTrim } from '@/types/types/CarQuery'

export const useFetchTrims = ({
	make,
	model,
	year,
}: FetchCarTrimParams): UseQueryResult<CarTrim[] | undefined, unknown> => {
	return useQuery({
		queryKey: [CarQueryKey],
		queryFn: async () => {
			const response = await getTrims({ make, model, year })
			return response
		},
	})
}
