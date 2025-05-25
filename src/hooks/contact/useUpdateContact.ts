import { useMutation } from '@tanstack/react-query'

import { update } from '@/api/contactApi'

import { queryClient } from '@/config/queryClient'
import { ContactKey } from '@/config/queryKeys'

import { UpdateContactParams } from '@/types/params/UpdateContactParams'
import { ApiResponse } from '@/types/types/ApiResponse'
import { Contact } from '@/types/types/Contact'

export const useUpdateContact = () => {
	return useMutation<ApiResponse<Contact | null>, unknown, UpdateContactParams>(
		{
			mutationFn: (dto) => update(dto),
			onSuccess: (response) => {
				if (response.success) {
					queryClient.invalidateQueries({ queryKey: [ContactKey] })
				}
			},
		}
	)
}
