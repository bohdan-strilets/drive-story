import { useMutation } from '@tanstack/react-query'

import { select } from '@/api/imageApi'

import { queryClient } from '@/config/queryClient'
import { ImageKey } from '@/config/queryKeys'

import { useImageStore } from '@/store/useImageStore'

import { SelectImageDto } from '@/types/dto/SelectImageDto'
import { ApiResponse } from '@/types/types/ApiResponse'
import { Image } from '@/types/types/Image'

export const useSelectImage = () => {
	const setImage = useImageStore((state) => state.setImage)

	return useMutation<ApiResponse<Image | null>, unknown, SelectImageDto>({
		mutationFn: ({ entityId, entityType, publicId }) =>
			select({ entityId, entityType, publicId }),

		onSuccess: (response) => {
			if (response.success) {
				setImage(response.data || null)
				queryClient.invalidateQueries({ queryKey: [ImageKey] })
			}
		},
	})
}
