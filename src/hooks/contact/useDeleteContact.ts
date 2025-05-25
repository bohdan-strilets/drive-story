import { useMutation } from '@tanstack/react-query'

import { remove } from '@/api/contactApi'

import { queryClient } from '@/config/queryClient'
import { ContactKey } from '@/config/queryKeys'

import { ApiResponse } from '@/types/types/ApiResponse'
import { Contact } from '@/types/types/Contact'

export const useDeleteContact = () => {
	return useMutation<ApiResponse<Contact | null>, unknown, string>({
		mutationFn: (contactId) => remove(contactId),
		onSuccess: (response) => {
			if (response.success) {
				queryClient.invalidateQueries({ queryKey: [ContactKey] })
			}
		},
	})
}
