import { UseQueryResult, useQuery } from '@tanstack/react-query'

import { getById } from '@/api/refuelingApi'

import { FuelingKey } from '@/config/queryKeys'

import { Fueling } from '@/types/types/Fueling'

export const useFetchFueling = (
	fuelingId?: string
): UseQueryResult<Fueling | undefined, unknown> => {
	return useQuery({
		queryKey: [FuelingKey, fuelingId],
		queryFn: async () => {
			if (!fuelingId) throw new Error('No fuelingId provided')

			const response = await getById(fuelingId)

			if (response.success) return response.data
		},

		enabled: Boolean(fuelingId),
	})
}
