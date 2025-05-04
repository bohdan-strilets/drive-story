import { useMutation } from '@tanstack/react-query'

import { remove } from '@/api/imageApi'

import { queryClient } from '@/config/queryClient'
import { UserKey } from '@/config/queryKeys'

import { DeleteImageDto } from '@/types/dto/DeleteImageDto'
import { ApiResponse } from '@/types/types/ApiResponse'
import { Image } from '@/types/types/Image'

export const useDeleteImage = () => {
	return useMutation<ApiResponse<Image | null>, unknown, DeleteImageDto>({
		mutationFn: ({ entityId, entityType, publicId }) =>
			remove({ entityId, entityType, publicId }),

		onSuccess: (response) => {
			if (response.success) {
				queryClient.invalidateQueries({ queryKey: [UserKey] })
			}
		},
	})
}
