import { useMutation } from '@tanstack/react-query'

import { removeAll } from '@/api/imageApi'

import { queryClient } from '@/config/queryClient'
import { ImageKey } from '@/config/queryKeys'

import { useImageStore } from '@/store/useImageStore'

import { DeleteAllImagesDto } from '@/types/dto/DeleteAllImagesDto'
import { ApiResponse } from '@/types/types/ApiResponse'
import { Image } from '@/types/types/Image'

export const useDeleteAllImages = () => {
	const setImage = useImageStore((state) => state.setImage)

	return useMutation<ApiResponse<Image | null>, unknown, DeleteAllImagesDto>({
		mutationFn: ({ entityId, entityType, imageId }) =>
			removeAll({ entityId, entityType, imageId }),

		onSuccess: (response) => {
			if (response.success) {
				setImage(response.data || null)
				queryClient.invalidateQueries({ queryKey: [ImageKey] })
			}
		},
	})
}
