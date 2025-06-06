import { AnimatePresence } from 'motion/react'
import { FC } from 'react'
import { generatePath, useNavigate, useParams } from 'react-router-dom'

import ImageViewer from '@/components/Gallery/ImageViewer'
import ErrorState from '@/components/Insurance/ErrorState'
import InsuranceForm from '@/components/Insurance/InsuranceForm'
import InsuranceInfo from '@/components/Insurance/InsuranceInfo'
import NoInsuranceState from '@/components/Insurance/NoInsuranceState'
import Modal from '@/components/Modal'
import BindContact from '@/components/PhoneBook/BindContact'
import ButtonGoBack from '@/components/UI/ButtonGoBack'
import Loader from '@/components/UI/Loader'
import Paragraph from '@/components/UI/Paragraph'
import Uploader from '@/components/Uploader'

import { useDeleteAllImages } from '@/hooks/image/useDeleteAllImages'
import { useBindContact } from '@/hooks/insurance/useBindContact'
import { useDeleteInsurance } from '@/hooks/insurance/useDeleteInsurance'
import { useFetchInsurance } from '@/hooks/insurance/useFetchInsurance'
import { useGalleryManager } from '@/hooks/ui/useGalleryManager'
import useModal from '@/hooks/ui/useModal'
import useSubmit from '@/hooks/ui/useSubmit'

import { modalNames } from '@/config/modalConfig'
import { routes } from '@/config/routes'

import { getImageId } from '@/utils/getImageId'
import { getImageResources } from '@/utils/getImageResources'
import { uploadFileParams } from '@/utils/uploadFileParams'

import { EntityType } from '@/types/enums/EntityType'
import { BindContactParams } from '@/types/params/BindContactParams'
import { DeleteImagesParams } from '@/types/params/DeleteImagesParams'
import { Image } from '@/types/types/Image'
import { Insurance } from '@/types/types/Insurance'

const InsurancePage: FC = () => {
	const { checkQueryParam, onClose } = useModal()
	const { carId, insuranceId } = useParams()

	const navigate = useNavigate()
	const carByIdPath = generatePath(routes.CAR_BY_ID, { carId: carId! })

	const {
		data: insurance,
		isLoading: isFetching,
		isError,
	} = useFetchInsurance(insuranceId)

	const { mutateAsync: deleteInsurance, isPending: isDeleteInsurance } =
		useDeleteInsurance()

	const deleteAndNavigate = useSubmit<Insurance | null, string | undefined>({
		callback: deleteInsurance,
		navigateTo: carByIdPath,
		successMessage: 'The insurance policy has been successfully deleted',
	})

	const { mutateAsync: deleteAllImages, isPending: isDeleteallImages } =
		useDeleteAllImages()

	const imageId = getImageId(insurance?.photos)
	const photos = getImageResources(insurance?.photos)

	const deleteImagesParams: DeleteImagesParams = {
		entityId: insuranceId,
		imageId,
		entityType: EntityType.INSURANCE,
	}

	const clearGallery = useSubmit<Image | null, DeleteImagesParams>({
		callback: deleteAllImages,
		isCloseModal: true,
		successMessage: 'All photos were successfully deleted',
	})

	const {
		actions: imageActions,
		isLoading: isImageLoading,
		upload: uploadImage,
		showImageViewer: showImageViewer,
		currentImage: currentImage,
		closeViewer: closeImageViewer,
	} = useGalleryManager({
		entityType: EntityType.INSURANCE,
		entityId: insuranceId,
	})

	const { mutateAsync: bindContact, isPending: isBinding } = useBindContact()

	const submitBindContact = useSubmit<Insurance | null, BindContactParams>({
		callback: bindContact,
		isCloseModal: true,
		successMessage: 'Contact bound successfully',
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

			{!insurance && <NoInsuranceState />}
			{insurance && (
				<InsuranceInfo<Insurance>
					insurance={insurance}
					imageActions={imageActions}
					isActionLoading={isImageLoading}
					isBinding={isBinding}
					bindContact={submitBindContact}
				/>
			)}

			<AnimatePresence>
				{checkQueryParam(modalNames.ADD_INSURANCE) && (
					<Modal key={modalNames.ADD_INSURANCE} title="Add insurance policy">
						<InsuranceForm mode="create" carId={carId!} />
					</Modal>
				)}

				{checkQueryParam(modalNames.EDIT_INSURANCE) && (
					<Modal key={modalNames.EDIT_INSURANCE} title="Edit insurance policy">
						<InsuranceForm mode="edit" carId={carId!} insurance={insurance} />
					</Modal>
				)}

				{checkQueryParam(modalNames.DELETE_INSURANCE) && (
					<Modal
						key={modalNames.DELETE_INSURANCE}
						title="Delete insurance policy?"
						isDialog={true}
						isLoading={isDeleteInsurance}
						negativeBtnLabel="no"
						positiveBtnLabel="yes"
						negativeCallback={onClose}
						positiveCallback={() => deleteAndNavigate(insuranceId)}
					>
						<Paragraph color="black" margin="0 0 15px 0">
							Are you sure you want to delete your current insurance policy
							information? The information will be lost forever.
						</Paragraph>
					</Modal>
				)}

				{checkQueryParam(modalNames.UPLOAD_INSURANCE_PHOTO) && (
					<Modal key={modalNames.UPLOAD_INSURANCE_PHOTO} title="Upload photo">
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
					<ImageViewer
						imageUrl={currentImage}
						closeViewer={closeImageViewer}
						imageUrls={photos}
					/>
				)}

				{checkQueryParam(modalNames.CLEAR_INSURANCE_GALLERY) && (
					<Modal
						key={modalNames.CLEAR_INSURANCE_GALLERY}
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

				{checkQueryParam(modalNames.BIND_INSURANCE_CONTACT) && (
					<Modal key={modalNames.BIND_INSURANCE_CONTACT} title="Bind contact">
						<BindContact<Insurance>
							isBinding={isBinding}
							bindContact={submitBindContact}
						/>
					</Modal>
				)}
			</AnimatePresence>
		</>
	)
}

export default InsurancePage
