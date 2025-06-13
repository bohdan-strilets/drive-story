import { UseQueryResult, useQuery } from '@tanstack/react-query'

import { getAll } from '@/api/contactApi'

import { ContactKey, ListKey } from '@/config/queryKeys'

import { PaginationParams } from '@/types/params/PaginationParams'
import { Contact } from '@/types/types/Contact'
import { PaginatedResponse } from '@/types/types/PaginatedResponse'

export const useFetchContacts = (
	params: PaginationParams
): UseQueryResult<PaginatedResponse<Contact> | undefined, unknown> => {
	return useQuery({
		queryKey: [ContactKey, ListKey],
		queryFn: async () => {
			const response = await getAll(params)
			if (response.success) {
				return response.data
			}
		},
	})
}
