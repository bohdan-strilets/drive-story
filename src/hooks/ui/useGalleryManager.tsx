import { nanoid } from 'nanoid'
import { BiSolidSelectMultiple } from 'react-icons/bi'
import { MdDelete } from 'react-icons/md'
import { PiResizeBold } from 'react-icons/pi'

import { extractPublicId } from '@/utils/extractImagePublicId'

import { Params } from '@/types/hooks/useGalleryManager'
import { PublicIdImageParams } from '@/types/params/PublicIdImageParams'
import { ApiResponse } from '@/types/types/ApiResponse'
import { Image } from '@/types/types/Image'

import { useDeleteImage } from '../image/useDeleteImage'
import { useSelectImage } from '../image/useSelectImage'
import { useUploadImage } from '../image/useUploadImage'

import useSubmit from './useSubmit'

export const useGalleryManager = ({
	entityType,
	entityId,
	openViewer,
}: Params) => {
	const { mutateAsync: selectImage, isPending: isSelect } = useSelectImage()
	const { mutateAsync: deleteImage, isPending: isDelete } = useDeleteImage()
	const { mutateAsync: uploadImage, isPending: isUpload } = useUploadImage()

	const isLoading = isSelect || isDelete || isUpload

	const submitSelectImage = useSubmit<Image | null, PublicIdImageParams>({
		callback: selectImage,
		successMessage: 'Image successfully changed',
	})

	const submitDeleteImage = useSubmit<Image | null, PublicIdImageParams>({
		callback: deleteImage,
		successMessage: 'Image successfully deleted',
	})

	const select = async (imageUrl: string): Promise<void> => {
		const publicId = extractPublicId(imageUrl)

		if (entityId && publicId) {
			await submitSelectImage({ entityId, entityType, publicId })
		}
	}

	const remove = async (
		imageUrl: string
	): Promise<ApiResponse<Image | null> | undefined> => {
		const publicId = extractPublicId(imageUrl)

		if (entityId && publicId) {
			return await submitDeleteImage({ entityId, entityType, publicId })
		}
	}

	const upload = async (file: FormData): Promise<ApiResponse<Image | null>> => {
		if (!entityId) {
			throw new Error('Missing entityId')
		}

		return uploadImage({ entityId, entityType, file })
	}

	const actions = [
		{
			id: nanoid(),
			callback: select,
			icon: <BiSolidSelectMultiple />,
			label: 'Select',
		},
		{
			id: nanoid(),
			callback: remove,
			icon: <MdDelete />,
			label: 'Delete',
		},
		{
			id: nanoid(),
			callback: openViewer,
			icon: <PiResizeBold />,
			label: 'View',
		},
	]

	return {
		actions,
		isLoading,
		upload,
	}
}
