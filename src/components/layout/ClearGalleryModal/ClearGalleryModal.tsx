import { FC } from 'react'

import Modal from '@/components/Modal'
import Paragraph from '@/components/UI/Paragraph'

import { useDeleteAllImages } from '@/hooks/image/useDeleteAllImages'
import useModal from '@/hooks/ui/useModal'
import useSubmit from '@/hooks/ui/useSubmit'

import { modalNames } from '@/config/modalConfig'

import { getImageId } from '@/utils/getImageId'

import { DeleteImagesParams } from '@/types/params/DeleteImagesParams'
import { ClearGalleryModalProps } from '@/types/props/Layout/ClearGalleryModalProps'
import { Image } from '@/types/types/Image'

const ClearGalleryModal: FC<ClearGalleryModalProps> = ({
	entityId,
	EntityType,
	images,
}) => {
	const { checkQueryParam, onClose } = useModal()
	const { mutateAsync: deleteAllImages, isPending } = useDeleteAllImages()

	const params: DeleteImagesParams = {
		entityId: entityId,
		imageId: getImageId(images),
		entityType: EntityType,
	}

	const clearGallery = useSubmit<Image | null, DeleteImagesParams>({
		callback: deleteAllImages,
		isCloseModal: true,
		successMessage: 'All photos were successfully deleted',
	})

	return (
		checkQueryParam(modalNames.CLEAR_GALLERY) && (
			<Modal
				title="Clear gallery?"
				isDialog={true}
				isLoading={isPending}
				negativeBtnLabel="no"
				positiveBtnLabel="yes"
				negativeCallback={onClose}
				positiveCallback={() => clearGallery(params)}
			>
				<Paragraph color="black" margin="0 0 15px 0">
					After confirmation, all images from the gallery will be deleted for
					this item. Do you want to continue?
				</Paragraph>
			</Modal>
		)
	)
}

export default ClearGalleryModal
