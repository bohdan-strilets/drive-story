import { AnimatePresence } from 'motion/react'
import { FC } from 'react'
import { useParams } from 'react-router-dom'

import CarInformation from '@/components/Garage/CarInformation'
import EditCar from '@/components/Garage/EditCar'
import Modal from '@/components/Modal'
import Uploader from '@/components/Uploader'

import { useUploadImage } from '@/hooks/image/useUploadImage'
import useModal from '@/hooks/ui/useModal'

import { uploadFileParams } from '@/utils/uploadFileParams'

import { EntityType } from '@/types/enums/EntityType'
import { ApiResponse } from '@/types/types/ApiResponse'
import { Image } from '@/types/types/Image'

const CarInformationPage: FC = () => {
	const { checkQueryParam, modalNames } = useModal()
	const { carId } = useParams()

	const { mutateAsync: uploadImage, isPending: isUploadImagePending } =
		useUploadImage()

	const upload = async (
		file: FormData
	): Promise<ApiResponse<Image | null> | undefined> => {
		if (carId) {
			return await uploadImage({
				entityId: carId,
				entityType: EntityType.CARS,
				file,
			})
		}
	}

	return (
		<>
			<CarInformation />

			<AnimatePresence>
				{checkQueryParam(modalNames.UPLOAD_CAR_PHOTO) && (
					<Modal key={modalNames.UPLOAD_CAR_PHOTO} title="Upload photo">
						<Uploader
							fileName="image"
							fileTypes={uploadFileParams.types}
							fileSize={uploadFileParams.size}
							isLoading={isUploadImagePending}
							callback={upload}
						/>
					</Modal>
				)}

				{checkQueryParam(modalNames.EDIT_CAR) && (
					<Modal key={modalNames.EDIT_CAR} title="Edit car information">
						<EditCar />
					</Modal>
				)}
			</AnimatePresence>
		</>
	)
}

export default CarInformationPage
