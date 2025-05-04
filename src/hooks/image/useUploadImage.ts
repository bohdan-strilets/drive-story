import { useMutation } from '@tanstack/react-query'

import { upload } from '@/api/imageApi'

import { queryClient } from '@/config/queryClient'
import { UserKey } from '@/config/queryKeys'

import { UploadImageDto } from '@/types/dto/UploadImageDto'
import { ApiResponse } from '@/types/types/ApiResponse'
import { Image } from '@/types/types/Image'

export const useUploadImage = () => {
	return useMutation<ApiResponse<Image | null>, unknown, UploadImageDto>({
		mutationFn: ({ file, entityId, entityType }) =>
			upload({ file, entityId, entityType }),

		onSuccess: (response) => {
			if (response.success) {
				queryClient.invalidateQueries({ queryKey: [UserKey] })
			}
		},
	})
}
