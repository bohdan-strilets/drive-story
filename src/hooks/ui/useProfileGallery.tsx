import { nanoid } from 'nanoid'
import { useState } from 'react'
import { BiSolidSelectMultiple } from 'react-icons/bi'
import { MdDelete } from 'react-icons/md'
import { PiResizeBold } from 'react-icons/pi'

import { useUserStore } from '@/store/useUserStore'

import { extractPublicId } from '@/utils/extractImagePublicId'

import { SelectImageDto } from '@/types/dto/SelectImageDto'
import { EntityType } from '@/types/enums/EntityType'
import { ApiResponse } from '@/types/types/ApiResponse'
import { Image } from '@/types/types/Image'

import { useDeleteImage } from '../image/useDeleteImage'
import { useSelectImage } from '../image/useSelectImage'
import { useUploadImage } from '../image/useUploadImage'

import useSubmit from './useSubmit'

export const useProfileGallery = (entityType: EntityType) => {
	const [showImageViewer, setShowImageViewer] = useState(false)
	const [currentImage, setCurrentImage] = useState<string | null>(null)

	const user = useUserStore((state) => state.user)

	const { mutateAsync: selectImage, isPending: isSelectImagePending } =
		useSelectImage()

	const { mutateAsync: deleteImage, isPending: isDeleteImagePending } =
		useDeleteImage()

	const { mutateAsync: uploadImage, isPending: isUploadImagePending } =
		useUploadImage()

	const isLoading =
		isSelectImagePending || isDeleteImagePending || isUploadImagePending

	const submitSelectImage = useSubmit<Image | null, SelectImageDto>({
		callback: selectImage,
		successMessage: 'Image successfully changed',
	})

	const submitDeleteImage = useSubmit<Image | null, SelectImageDto>({
		callback: deleteImage,
		successMessage: 'Image successfully deleted',
	})

	const select = async (imageUrl: string) => {
		const imagePublicId = extractPublicId(imageUrl)

		if (user && imagePublicId) {
			await submitSelectImage({
				entityId: user?._id,
				entityType: entityType,
				publicId: imagePublicId,
			})
		}
	}

	const remove = async (imageUrl: string) => {
		const imagePublicId = extractPublicId(imageUrl)

		if (user && imagePublicId) {
			await submitDeleteImage({
				entityId: user?._id,
				entityType: entityType,
				publicId: imagePublicId,
			})
		}
	}

	const openViewer = (imageUrl: string) => {
		setShowImageViewer(true)
		setCurrentImage(imageUrl)
	}

	const closeViewer = () => {
		setShowImageViewer(false)
		setCurrentImage(null)
	}

	const upload = async (
		file: FormData
	): Promise<ApiResponse<Image | null> | undefined> => {
		if (user) {
			return await uploadImage({
				entityId: user?._id,
				entityType: entityType,
				file,
			})
		}
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
		showImageViewer,
		currentImage,
		closeViewer,
	}
}
