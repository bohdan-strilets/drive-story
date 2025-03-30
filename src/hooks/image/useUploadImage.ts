import { useMutation } from '@tanstack/react-query'

import { upload } from '@/api/imageApi'

import { queryClient } from '@/config/queryClient'
import { ImageKey, UserKey } from '@/config/queryKeys'

import { useImageStore } from '@/store/useImageStore'

import { UploadImageDto } from '@/types/dto/UploadImageDto'
import { ApiResponse } from '@/types/types/ApiResponse'
import { Image } from '@/types/types/Image'

export const useUploadImage = () => {
	const setImage = useImageStore((state) => state.setImage)

	return useMutation<ApiResponse<Image | null>, unknown, UploadImageDto>({
		mutationFn: ({ file, entityId, entityType }) =>
			upload({ file, entityId, entityType }),

		onSuccess: (response) => {
			if (response.success) {
				setImage(response.data || null)
				queryClient.invalidateQueries({ queryKey: [ImageKey, UserKey] })
			}
		},
	})
}
