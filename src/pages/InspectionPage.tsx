import { AnimatePresence } from 'motion/react'
import { FC } from 'react'
import { generatePath, useNavigate, useParams } from 'react-router-dom'

import ImageViewer from '@/components/Gallery/ImageViewer'
import ErrorState from '@/components/Inspection/ErrorState'
import InspectionForm from '@/components/Inspection/InspectionForm'
import InspectionInfo from '@/components/Inspection/InspectionInfo'
import NoInspectionState from '@/components/Inspection/NoInspectionState'
import Modal from '@/components/Modal'
import ButtonGoBack from '@/components/UI/ButtonGoBack'
import Loader from '@/components/UI/Loader'
import Paragraph from '@/components/UI/Paragraph'
import Uploader from '@/components/Uploader'

import { useDeleteAllImages } from '@/hooks/image/useDeleteAllImages'
import { useDeleteInspection } from '@/hooks/inspection/useDeleteInspection'
import { useFetchInspection } from '@/hooks/inspection/useFetchInspection'
import { useGalleryManager } from '@/hooks/ui/useGalleryManager'
import useModal from '@/hooks/ui/useModal'
import useSubmit from '@/hooks/ui/useSubmit'

import { modalNames } from '@/config/modalConfig'
import { routes } from '@/config/routes'

import { getImageId } from '@/utils/getImageId'
import { uploadFileParams } from '@/utils/uploadFileParams'

import { EntityType } from '@/types/enums/EntityType'
import { DeleteImagesParams } from '@/types/params/DeleteImagesParams'
import { Image } from '@/types/types/Image'
import { Inspection } from '@/types/types/Inspection'

const InspectionPage: FC = () => {
	const { checkQueryParam, onClose } = useModal()
	const { carId, inspectionId } = useParams()

	const navigate = useNavigate()
	const carByIdPath = generatePath(routes.CAR_BY_ID, { carId: carId! })

	const {
		data: inspection,
		isLoading: isFetching,
		isError,
	} = useFetchInspection(inspectionId)

	const { mutateAsync: deleteInspection, isPending: isDeleteInspection } =
		useDeleteInspection()

	const deleteAndNavigate = useSubmit<Inspection | null, string | undefined>({
		callback: deleteInspection,
		navigateTo: carByIdPath,
		successMessage: 'The technical inspection has been successfully deleted',
	})

	const { mutateAsync: deleteAllImages, isPending: isDeleteallImages } =
		useDeleteAllImages()

	const clearGallery = useSubmit<Image | null, DeleteImagesParams>({
		callback: deleteAllImages,
		isCloseModal: true,
		successMessage: 'All photos were successfully deleted',
	})

	const imageId = getImageId<Inspection>(inspection)

	const deleteImagesParams: DeleteImagesParams = {
		entityId: inspectionId,
		imageId,
		entityType: EntityType.INSPECTION,
	}

	const {
		actions: imageActions,
		isLoading: isImageLoading,
		upload: uploadImage,
		showImageViewer: showImageViewer,
		currentImage: currentImage,
		closeViewer: closeImageViewer,
	} = useGalleryManager({
		entityType: EntityType.INSPECTION,
		entityId: inspectionId,
	})

	if (isFetching) return <Loader color="gray" />
	if (isError) return <ErrorState />

	return (
		<>
			<ButtonGoBack
				label="car"
				onClick={() => navigate(carByIdPath)}
				margin="0 0 5px 0"
				color="black"
			/>

			{!inspection && <NoInspectionState />}
			{inspection && (
				<InspectionInfo
					inspection={inspection}
					imageActions={imageActions}
					isActionLoading={isImageLoading}
				/>
			)}

			<AnimatePresence>
				{checkQueryParam(modalNames.ADD_INSPECTION) && (
					<Modal
						key={modalNames.ADD_INSPECTION}
						title="Add technical inspection"
					>
						<InspectionForm mode="create" carId={carId!} />
					</Modal>
				)}

				{checkQueryParam(modalNames.EDIT_INSPECTION) && (
					<Modal
						key={modalNames.EDIT_INSPECTION}
						title="Edit technical inspection information"
					>
						<InspectionForm
							mode="edit"
							carId={carId!}
							inspection={inspection}
						/>
					</Modal>
				)}

				{checkQueryParam(modalNames.DELETE_INSPECTION) && (
					<Modal
						key={modalNames.DELETE_INSPECTION}
						title="Delete technical inspection?"
						isDialog={true}
						isLoading={isDeleteInspection}
						negativeBtnLabel="no"
						positiveBtnLabel="yes"
						negativeCallback={onClose}
						positiveCallback={() => deleteAndNavigate(inspectionId)}
					>
						<Paragraph color="black" margin="0 0 15px 0">
							Are you sure you want to delete your current technical inspection
							information? The information will be lost forever.
						</Paragraph>
					</Modal>
				)}

				{checkQueryParam(modalNames.UPLOAD_INSPECTION_PHOTO) && (
					<Modal key={modalNames.UPLOAD_INSPECTION_PHOTO} title="Upload photo">
						<Uploader
							fileName="image"
							fileTypes={uploadFileParams.types}
							fileSize={uploadFileParams.size}
							isLoading={isImageLoading}
							callback={uploadImage}
						/>
					</Modal>
				)}

				{showImageViewer && (
					<ImageViewer imageUrl={currentImage} closeViewer={closeImageViewer} />
				)}

				{checkQueryParam(modalNames.CLEAR_INSPECTION_GALLERY) && (
					<Modal
						key={modalNames.CLEAR_INSPECTION_GALLERY}
						title="Clear gallery?"
						isDialog={true}
						isLoading={isDeleteallImages}
						negativeBtnLabel="no"
						positiveBtnLabel="yes"
						negativeCallback={onClose}
						positiveCallback={() => clearGallery(deleteImagesParams)}
					>
						<Paragraph color="black" margin="0 0 15px 0">
							After confirmation, all images from the gallery will be deleted
							for this item. Do you want to continue?
						</Paragraph>
					</Modal>
				)}
			</AnimatePresence>
		</>
	)
}

export default InspectionPage
