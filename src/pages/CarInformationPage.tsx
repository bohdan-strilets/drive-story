import { AnimatePresence } from 'motion/react'
import { FC } from 'react'
import { useParams } from 'react-router-dom'

import ImageViewer from '@/components/Gallery/ImageViewer'
import CarForm from '@/components/Garage/CarForm'
import CarInformation from '@/components/Garage/CarInformation'
import Modal from '@/components/Modal'
import Uploader from '@/components/Uploader'

import { useGalleryManager } from '@/hooks/ui/useGalleryManager'
import useModal from '@/hooks/ui/useModal'

import { uploadFileParams } from '@/utils/uploadFileParams'

import { EntityType } from '@/types/enums/EntityType'

const CarInformationPage: FC = () => {
	const { checkQueryParam, modalNames } = useModal()
	const { carId } = useParams()

	const {
		actions: imageActions,
		isLoading: isImageLoading,
		upload: uploadImage,
		showImageViewer: showImageViewer,
		currentImage: currentImage,
		closeViewer: closeImageViewer,
	} = useGalleryManager({ entityType: EntityType.CARS, entityId: carId })

	return (
		<>
			<CarInformation
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
