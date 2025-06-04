import { UseQueryResult, useQuery } from '@tanstack/react-query'

import { getById } from '@/api/contactApi'

import { ContactKey } from '@/config/queryKeys'

import { Contact } from '@/types/types/Contact'

export const useFetchContact = (
	contactId?: string | null
): UseQueryResult<Contact | undefined, unknown> => {
	return useQuery({
		queryKey: [ContactKey, contactId],
		queryFn: async () => {
			if (!contactId) throw new Error('No contactId provided')

			const response = await getById(contactId)

			if (response.success) return response.data
		},

		enabled: Boolean(contactId),
	})
}
