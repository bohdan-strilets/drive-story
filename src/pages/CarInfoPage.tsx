import { AnimatePresence } from 'motion/react'
import { FC } from 'react'
import { useParams } from 'react-router-dom'

import ImageViewer from '@/components/Gallery/ImageViewer'
import CarForm from '@/components/Garage/CarForm'
import CarInformation from '@/components/Garage/CarInformation'
import ErrorState from '@/components/Garage/ErrorState'
import Modal from '@/components/Modal'
import Loader from '@/components/UI/Loader'
import Paragraph from '@/components/UI/Paragraph'
import Uploader from '@/components/Uploader'

import { useFetchCar } from '@/hooks/car/useFetchCar'
import { useFetchTrimsById } from '@/hooks/carQuery/useFetchTrimsById'
import { useGalleryManager } from '@/hooks/ui/useGalleryManager'
import useModal from '@/hooks/ui/useModal'
import useSubmit from '@/hooks/ui/useSubmit'
import { useSetCurrentCar } from '@/hooks/user/useSetCurrentCar'

import { modalNames } from '@/config/modalConfig'

import { getImageResources } from '@/utils/getImageResources'
import { uploadFileParams } from '@/utils/uploadFileParams'

import { CurrentCarDto } from '@/types/dto/CurrentCarDto'
import { EntityType } from '@/types/enums/EntityType'
import { User } from '@/types/types/User'

const CarInfoPage: FC = () => {
	const { checkQueryParam, onClose } = useModal()
	const { carId } = useParams()

	const { data: car, isLoading, isError } = useFetchCar(carId)
	const { data: carTrims } = useFetchTrimsById({
		make: car?.basicInfo.make,
		model: car?.basicInfo.model,
		year: car?.basicInfo.year,
		trimsId: car?.basicInfo.trimsId,
	})

	const {
		actions: imageActions,
		isLoading: isImageLoading,
		upload: uploadImage,
		showImageViewer: showImageViewer,
		currentImage: currentImage,
		closeViewer: closeImageViewer,
	} = useGalleryManager({ entityType: EntityType.CARS, entityId: carId })

	const { mutateAsync: setCurrentCar, isPending: isSetCar } = useSetCurrentCar()

	const setCarSubmit = useSubmit<User | null, CurrentCarDto>({
		callback: setCurrentCar,
		isCloseModal: true,
		successMessage: 'The current car has been modified',
	})

	const photos = getImageResources(car?.photos)

	if (isLoading) return <Loader color="gray" />
	if (isError) return <ErrorState />

	return (
		<>
			{car && (
				<CarInformation
					car={car}
					imageActions={imageActions}
					isActionLoading={isImageLoading}
					trims={carTrims?.data}
				/>
			)}

			<AnimatePresence>
				{checkQueryParam(modalNames.UPLOAD_CAR_PHOTO) && (
					<Modal key={modalNames.UPLOAD_CAR_PHOTO} title="Upload photo">
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

				{checkQueryParam(modalNames.EDIT_CAR) && (
					<Modal key={modalNames.EDIT_CAR} title="Edit car information">
						<CarForm mode="edit" car={car} />
					</Modal>
				)}

				{checkQueryParam(modalNames.SET_CURRENT_CAR) && (
					<Modal
						key={modalNames.SET_CURRENT_CAR}
						title="Select this car?"
						isDialog={true}
						isLoading={isSetCar}
						negativeBtnLabel="no"
						positiveBtnLabel="yes"
						negativeCallback={onClose}
						positiveCallback={() => setCarSubmit({ carId: carId! })}
					>
						<Paragraph color="black" margin="0 0 15px 0">
							By continuing, you will set this car as your current car that you
							drive and maintain at this time.
						</Paragraph>
					</Modal>
				)}
			</AnimatePresence>
		</>
	)
}

export default CarInfoPage
