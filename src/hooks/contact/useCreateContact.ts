import { useMutation } from '@tanstack/react-query'

import { create } from '@/api/contactApi'

import { queryClient } from '@/config/queryClient'
import { ContactKey } from '@/config/queryKeys'

import { ContactDto } from '@/types/dto/ContactDto'
import { ApiResponse } from '@/types/types/ApiResponse'
import { Contact } from '@/types/types/Contact'

export const useCreateContact = () => {
	return useMutation<ApiResponse<Contact | null>, unknown, ContactDto>({
		mutationFn: (params) => create(params),
		onSuccess: (response) => {
			if (response.success) {
				queryClient.invalidateQueries({ queryKey: [ContactKey] })
			}
		},
	})
}
