import { useMutation } from '@tanstack/react-query'

import { remove } from '@/api/imageApi'

import { queryClient } from '@/config/queryClient'
import { CarKey, UserKey } from '@/config/queryKeys'

import { DeleteImageParams } from '@/types/params/DeleteImageParams'
import { ApiResponse } from '@/types/types/ApiResponse'
import { Image } from '@/types/types/Image'

export const useDeleteImage = () => {
	return useMutation<ApiResponse<Image | null>, unknown, DeleteImageParams>({
		mutationFn: ({ entityId, entityType, publicId }) =>
			remove({ entityId, entityType, publicId }),

		onSuccess: (response, { entityId }) => {
			if (response.success) {
				queryClient.invalidateQueries({ queryKey: [UserKey] })
				queryClient.invalidateQueries({ queryKey: [CarKey, entityId] })
				queryClient.invalidateQueries({ queryKey: [CarKey] })
			}
		},
	})
}
