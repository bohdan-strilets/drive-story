import { useMutation } from '@tanstack/react-query'

import { select } from '@/api/imageApi'

import { queryClient } from '@/config/queryClient'
import { UserKey } from '@/config/queryKeys'

import { SelectImageDto } from '@/types/dto/SelectImageDto'
import { ApiResponse } from '@/types/types/ApiResponse'
import { Image } from '@/types/types/Image'

export const useSelectImage = () => {
	return useMutation<ApiResponse<Image | null>, unknown, SelectImageDto>({
		mutationFn: ({ entityId, entityType, publicId }) =>
			select({ entityId, entityType, publicId }),

		onSuccess: (response) => {
			if (response.success) {
				queryClient.invalidateQueries({ queryKey: [UserKey] })
			}
		},
	})
}
