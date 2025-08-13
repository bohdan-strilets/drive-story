import { AnimatePresence } from 'motion/react'
import { FC } from 'react'

import BindContactModal from '@/components/Layout/BindContactModal'
import ClearGalleryModal from '@/components/Layout/ClearGalleryModal'
import ShowImageViewer from '@/components/Layout/ShowImageViewer'
import UploadPhotoModal from '@/components/Layout/UploadPhotoModal'

import { getImageResources } from '@/utils/getImageResources'

import { EntityType } from '@/types/enums/EntityType'
import { RefuelingModalsProps } from '@/types/props/Refueling/RefuelingModalsProps'

import DeleteRefuelingModal from './modals/DeleteRefuelingModal'
import EditRefuelingModal from './modals/EditRefuelingModal'

const RefuelingModals: FC<RefuelingModalsProps> = ({
	isLoading,
	upload,
	refueling,
	showViewer,
	closeViewer,
	currentImage,
	refuelingId,
	bindContact,
	isBinding,
	carId,
}) => {
	const photos = getImageResources(refueling?.photos)

	return (
		<AnimatePresence>
			<EditRefuelingModal refueling={refueling} key={1} />

			<DeleteRefuelingModal carId={carId} refuelingId={refuelingId} key={2} />

			<UploadPhotoModal isLoading={isLoading} callback={upload} key={3} />

			<ShowImageViewer
				photos={photos}
				showViewer={showViewer}
				closeViewer={closeViewer}
				currentImage={currentImage}
				key={4}
			/>

			<ClearGalleryModal
				entityId={refuelingId}
				EntityType={EntityType.FUELING}
				images={refueling.photos}
				key={5}
			/>

			<BindContactModal
				bindContact={bindContact}
				isBinding={isBinding}
				entityId={refuelingId}
				key={6}
			/>
		</AnimatePresence>
	)
}

export default RefuelingModals
