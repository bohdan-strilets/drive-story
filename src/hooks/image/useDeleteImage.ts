import { useMutation } from '@tanstack/react-query'

import { remove } from '@/api/imageApi'

import { queryClient } from '@/config/queryClient'
import { ImageKey } from '@/config/queryKeys'

import { useImageStore } from '@/store/useImageStore'

import { DeleteImageDto } from '@/types/dto/DeleteImageDto'
import { ApiResponse } from '@/types/types/ApiResponse'
import { Image } from '@/types/types/Image'

export const useDeleteImage = () => {
	const setImage = useImageStore((state) => state.setImage)

	return useMutation<ApiResponse<Image | null>, unknown, DeleteImageDto>({
		mutationFn: ({ entityId, entityType, publicId }) =>
			remove({ entityId, entityType, publicId }),

		onSuccess: (response) => {
			if (response.success) {
				setImage(response.data || null)
				queryClient.invalidateQueries({ queryKey: [ImageKey] })
			}
		},
	})
}
