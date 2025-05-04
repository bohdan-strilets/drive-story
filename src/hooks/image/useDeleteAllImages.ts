import { useMutation } from '@tanstack/react-query'

import { removeAll } from '@/api/imageApi'

import { queryClient } from '@/config/queryClient'
import { UserKey } from '@/config/queryKeys'

import { DeleteAllImagesDto } from '@/types/dto/DeleteAllImagesDto'
import { ApiResponse } from '@/types/types/ApiResponse'
import { Image } from '@/types/types/Image'

export const useDeleteAllImages = () => {
	return useMutation<ApiResponse<Image | null>, unknown, DeleteAllImagesDto>({
		mutationFn: ({ entityId, entityType, imageId }) =>
			removeAll({ entityId, entityType, imageId }),

		onSuccess: (response) => {
			if (response.success) {
				queryClient.invalidateQueries({ queryKey: [UserKey] })
			}
		},
	})
}
