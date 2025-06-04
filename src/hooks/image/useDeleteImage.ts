import { useMutation } from '@tanstack/react-query'

import { remove } from '@/api/imageApi'

import { queryClient } from '@/config/queryClient'
import {
	CarKey,
	ContactKey,
	InspectionKey,
	InsuranceKey,
	UserKey,
} from '@/config/queryKeys'

import { PublicIdImageParams } from '@/types/params/PublicIdImageParams'
import { ApiResponse } from '@/types/types/ApiResponse'
import { Image } from '@/types/types/Image'

export const useDeleteImage = () => {
	return useMutation<ApiResponse<Image | null>, unknown, PublicIdImageParams>({
		mutationFn: ({ entityId, entityType, publicId }) =>
			remove({ entityId, entityType, publicId }),

		onSuccess: (response, { entityId }) => {
			if (response.success) {
				queryClient.invalidateQueries({ queryKey: [UserKey] })
				queryClient.invalidateQueries({ queryKey: [CarKey, entityId] })
				queryClient.invalidateQueries({ queryKey: [CarKey] })
				queryClient.invalidateQueries({ queryKey: [InsuranceKey, entityId] })
				queryClient.invalidateQueries({ queryKey: [InspectionKey, entityId] })
				queryClient.invalidateQueries({ queryKey: [ContactKey, entityId] })
			}
		},
	})
}
