import { useMutation } from '@tanstack/react-query'

import { upload } from '@/api/imageApi'

import { queryClient } from '@/config/queryClient'
import { CarKey, UserKey } from '@/config/queryKeys'

import { UploadImageParams } from '@/types/params/UploadImageParams'
import { ApiResponse } from '@/types/types/ApiResponse'
import { Image } from '@/types/types/Image'

export const useUploadImage = () => {
	return useMutation<ApiResponse<Image | null>, unknown, UploadImageParams>({
		mutationFn: ({ file, entityId, entityType }) =>
			upload({ file, entityId, entityType }),

		onSuccess: (response, { entityId }) => {
			if (response.success) {
				queryClient.invalidateQueries({ queryKey: [UserKey] })
				queryClient.invalidateQueries({ queryKey: [CarKey, entityId] })
				queryClient.invalidateQueries({ queryKey: [CarKey] })
			}
		},
	})
}
