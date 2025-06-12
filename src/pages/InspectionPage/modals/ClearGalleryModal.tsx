import { FC } from 'react'

import Modal from '@/components/Modal'
import Paragraph from '@/components/UI/Paragraph'

import { useDeleteAllImages } from '@/hooks/image/useDeleteAllImages'
import useModal from '@/hooks/ui/useModal'
import useSubmit from '@/hooks/ui/useSubmit'

import { modalNames } from '@/config/modalConfig'

import { getImageId } from '@/utils/getImageId'

import { EntityType } from '@/types/enums/EntityType'
import { DeleteImagesParams } from '@/types/params/DeleteImagesParams'
import { ClearGalleryModalProps } from '@/types/props/Inspection/ClearGalleryModalProps'
import { Image } from '@/types/types/Image'

const ClearGalleryModal: FC<ClearGalleryModalProps> = ({
	images,
	inspectionId,
}) => {
	const { checkQueryParam, onClose } = useModal()

	const { mutateAsync: deleteAllImages, isPending } = useDeleteAllImages()

	const clearGallery = useSubmit<Image | null, DeleteImagesParams>({
		callback: deleteAllImages,
		isCloseModal: true,
		successMessage: 'All photos were successfully deleted',
	})

	const deleteImagesParams: DeleteImagesParams = {
		entityId: inspectionId,
		imageId: getImageId(images),
		entityType: EntityType.INSPECTION,
	}

	return (
		checkQueryParam(modalNames.CLEAR_INSPECTION_GALLERY) && (
			<Modal
				title="Clear gallery?"
				isDialog={true}
				isLoading={isPending}
				negativeBtnLabel="no"
				positiveBtnLabel="yes"
				negativeCallback={onClose}
				positiveCallback={() => clearGallery(deleteImagesParams)}
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
