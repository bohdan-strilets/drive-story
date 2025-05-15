import { AnimatePresence } from 'motion/react'
import { FC } from 'react'
import { useParams } from 'react-router-dom'

import ImageViewer from '@/components/Gallery/ImageViewer'
import CarForm from '@/components/Garage/CarForm'
import CarInformation from '@/components/Garage/CarInformation'
import ErrorState from '@/components/Garage/ErrorState'
import Modal from '@/components/Modal'
import Loader from '@/components/UI/Loader'
import Uploader from '@/components/Uploader'

import { useFetchCar } from '@/hooks/car/useFetchCar'
import { useGalleryManager } from '@/hooks/ui/useGalleryManager'
import useModal from '@/hooks/ui/useModal'

import { uploadFileParams } from '@/utils/uploadFileParams'

import { EntityType } from '@/types/enums/EntityType'

const CarInformationPage: FC = () => {
	const { checkQueryParam, modalNames } = useModal()
	const { carId } = useParams()
	const { data: car, isLoading, isError } = useFetchCar(carId ?? '')

	const {
		actions: imageActions,
		isLoading: isImageLoading,
		upload: uploadImage,
		showImageViewer: showImageViewer,
		currentImage: currentImage,
		closeViewer: closeImageViewer,
	} = useGalleryManager({ entityType: EntityType.CARS, entityId: carId })

	if (isLoading) {
		return <Loader color="gray" />
	}

	if (isError) {
		return <ErrorState />
	}

	return (
		<>
			<CarInformation
				car={car}
				imageActions={imageActions}
				isActionLoading={isImageLoading}
			/>

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
					<ImageViewer imageUrl={currentImage} closeViewer={closeImageViewer} />
				)}

				{checkQueryParam(modalNames.EDIT_CAR) && (
					<Modal key={modalNames.EDIT_CAR} title="Edit car information">
						<CarForm mode="edit" />
					</Modal>
				)}
			</AnimatePresence>
		</>
	)
}

export default CarInformationPage
