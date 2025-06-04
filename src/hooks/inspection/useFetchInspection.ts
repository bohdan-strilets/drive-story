import { UseQueryResult, useQuery } from '@tanstack/react-query'

import { getById } from '@/api/inspectionApi'

import { InspectionKey } from '@/config/queryKeys'

import { Inspection } from '@/types/types/Inspection'

export const useFetchInspection = (
	inspectionId?: string
): UseQueryResult<Inspection | undefined, unknown> => {
	return useQuery({
		queryKey: [InspectionKey, inspectionId],
		queryFn: async () => {
			if (!inspectionId) throw new Error('No inspectionId provided')

			const response = await getById(inspectionId)

			if (response.success) return response.data
		},

		enabled: Boolean(inspectionId),
	})
}
