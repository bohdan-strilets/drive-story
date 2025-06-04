import { useMutation } from '@tanstack/react-query'

import { update } from '@/api/contactApi'

import { queryClient } from '@/config/queryClient'
import { ContactKey } from '@/config/queryKeys'

import { ContactDto } from '@/types/dto/ContactDto'
import { UpdateParams } from '@/types/params/UpdateParams'
import { ApiResponse } from '@/types/types/ApiResponse'
import { Contact } from '@/types/types/Contact'

export const useUpdateContact = () => {
	return useMutation<
		ApiResponse<Contact | null>,
		unknown,
		UpdateParams<ContactDto>
	>({
		mutationFn: (params) => update(params),
		onSuccess: (response) => {
			if (response.success) {
				queryClient.invalidateQueries({ queryKey: [ContactKey] })
			}
		},
	})
}
// UpdateContactParams
