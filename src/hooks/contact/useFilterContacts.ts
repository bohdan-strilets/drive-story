import { UseQueryResult, useQuery } from '@tanstack/react-query'

import { filterByNameOrPhone } from '@/api/contactApi'

import { ContactKey, ListKey } from '@/config/queryKeys'

import { PaginationParams } from '@/types/params/PaginationParams'
import { Contact } from '@/types/types/Contact'
import { PaginatedResponse } from '@/types/types/PaginatedResponse'

export const useFilterContacts = (
	params: PaginationParams
): UseQueryResult<PaginatedResponse<Contact> | undefined, unknown> => {
	return useQuery({
		queryKey: [ContactKey, ListKey],
		queryFn: async () => {
			const response = await filterByNameOrPhone(params)
			if (response.success) {
				return response.data
			}

			return undefined
		},

		enabled: params.searchQuery !== undefined,
		staleTime: 1000 * 60 * 2,
	})
}
