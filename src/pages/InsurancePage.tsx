import { AnimatePresence } from 'motion/react'
import { FC } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import ImageViewer from '@/components/Gallery/ImageViewer'
import ErrorState from '@/components/Insurance/ErrorState'
import InsuranceForm from '@/components/Insurance/InsuranceForm'
import InsuranceInfo from '@/components/Insurance/InsuranceInfo'
import NoInsuranceState from '@/components/Insurance/NoInsuranceState'
import Modal from '@/components/Modal'
import ButtonGoBack from '@/components/UI/ButtonGoBack'
import Loader from '@/components/UI/Loader'
import Paragraph from '@/components/UI/Paragraph'
import Uploader from '@/components/Uploader'

import { useDeleteInsurance } from '@/hooks/insurance/useDeleteInsurance'
import { useFetchInsurance } from '@/hooks/insurance/useFetchInsurance'
import { useGalleryManager } from '@/hooks/ui/useGalleryManager'
import useModal from '@/hooks/ui/useModal'
import useSubmit from '@/hooks/ui/useSubmit'

import { routes } from '@/config/routes'

import { uploadFileParams } from '@/utils/uploadFileParams'

import { EntityType } from '@/types/enums/EntityType'
import { InsurancePathParams } from '@/types/params/InsurancePathParams'
import { Insurance } from '@/types/types/Insurance'

const InsurancePage: FC = () => {
	const { carId, insuranceId } = useParams()
	const { modalNames, checkQueryParam, onClose } = useModal()
	const navigate = useNavigate()

	const {
		data: insurance,
		isLoading: isFetching,
		isError,
	} = useFetchInsurance(insuranceId)

	const { mutateAsync: deleteInsurance, isPending: isDeleteInsurance } =
		useDeleteInsurance()

	const insurancePathParams: InsurancePathParams = {
		carId: insurance?.carId ?? '',
		insuranceId: insurance?._id ?? '',
	}

	const deleteAndNavigate = useSubmit<Insurance | null, InsurancePathParams>({
		callback: deleteInsurance,
		navigateTo: `${routes.CAR_INFORMATION}/${carId}`,
		successMessage: 'The insurance policy has been successfully deleted',
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

	if (isFetching) {
		return <Loader color="gray" />
	}

	if (isError) {
		return <ErrorState />
	}

	return (
		<>
			<ButtonGoBack
				label="car"
				onClick={() => navigate(`${routes.CAR_INFORMATION}/${carId}`)}
				margin="0 0 5px 0"
				color="black"
			/>

			{!insurance && <NoInsuranceState />}
			{insurance && (
				<InsuranceInfo
					insurance={insurance}
					imageActions={imageActions}
					isActionLoading={isImageLoading}
				/>
			)}

			<AnimatePresence>
				{checkQueryParam(modalNames.ADD_INSURANCE_POLICY) && (
					<Modal
						key={modalNames.ADD_INSURANCE_POLICY}
						title="Add insurance policy"
					>
						<InsuranceForm mode="create" />
					</Modal>
				)}
				{checkQueryParam(modalNames.EDIT_INSURANCE_POLICY) && (
					<Modal
						key={modalNames.EDIT_INSURANCE_POLICY}
						title="Edit insurance policy"
					>
						<InsuranceForm mode="edit" insurance={insurance} />
					</Modal>
				)}
				{checkQueryParam(modalNames.DELETE_iNSURANCE_POLICY) && (
					<Modal
						key={modalNames.DELETE_iNSURANCE_POLICY}
						title="Delete insurance policy?"
						isDialog={true}
						isLoading={isDeleteInsurance}
						negativeBtnLabel="no"
						positiveBtnLabel="yes"
						negativeCallback={onClose}
						positiveCallback={() => deleteAndNavigate(insurancePathParams)}
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
					<ImageViewer imageUrl={currentImage} closeViewer={closeImageViewer} />
				)}
				``
			</AnimatePresence>
		</>
	)
}

export default InsurancePage
