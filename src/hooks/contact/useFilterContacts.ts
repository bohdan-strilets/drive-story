import { UseQueryResult, useQuery } from '@tanstack/react-query'

import { filterByNameOrPhone } from '@/api/contactApi'

import { ContactKey } from '@/config/queryKeys'

import { PaginationParams } from '@/types/params/PaginationParams'
import { Contact } from '@/types/types/Contact'
import { PaginatedResponse } from '@/types/types/PaginatedResponse'

export const useFetchContacts = (
	dto: PaginationParams
): UseQueryResult<PaginatedResponse<Contact> | undefined, unknown> => {
	return useQuery({
		queryKey: [ContactKey, dto.page, dto.limit],
		queryFn: async () => {
			const response = await filterByNameOrPhone(dto)
			if (response.success) {
				return response.data
			}
		},
	})
}
