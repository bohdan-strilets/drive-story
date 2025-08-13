import { useMutation } from '@tanstack/react-query'

import { removeAll } from '@/api/imageApi'

import { queryClient } from '@/config/queryClient'
import {
	CarKey,
	ContactKey,
	FuelingKey,
	InspectionKey,
	InsuranceKey,
	UserKey,
} from '@/config/queryKeys'

import { DeleteImagesParams } from '@/types/params/DeleteImagesParams'
import { ApiResponse } from '@/types/types/ApiResponse'
import { Image } from '@/types/types/Image'

export const useDeleteAllImages = () => {
	return useMutation<ApiResponse<Image | null>, unknown, DeleteImagesParams>({
		mutationFn: ({ entityId, entityType, imageId }) =>
			removeAll({ entityId, entityType, imageId }),

		onSuccess: (response, { entityId }) => {
			if (response.success) {
				queryClient.invalidateQueries({ queryKey: [UserKey] })
				queryClient.invalidateQueries({ queryKey: [CarKey, entityId] })
				queryClient.invalidateQueries({ queryKey: [CarKey] })
				queryClient.invalidateQueries({ queryKey: [InsuranceKey, entityId] })
				queryClient.invalidateQueries({ queryKey: [InspectionKey, entityId] })
				queryClient.invalidateQueries({ queryKey: [ContactKey, entityId] })
				queryClient.invalidateQueries({ queryKey: [FuelingKey, entityId] })
			}
		},
	})
}
