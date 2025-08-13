import { AnimatePresence } from 'motion/react'
import { FC } from 'react'

import BindContactModal from '@/components/Layout/BindContactModal'
import ClearGalleryModal from '@/components/Layout/ClearGalleryModal'
import ShowImageViewer from '@/components/Layout/ShowImageViewer'
import UploadPhotoModal from '@/components/Layout/UploadPhotoModal'

import { getImageResources } from '@/utils/getImageResources'

import { EntityType } from '@/types/enums/EntityType'
import { InspectionModalsProps } from '@/types/props/Inspection/InspectionModalsProps'

import AddInspectionModal from './modals/AddInspectionModal'
import DeleteInspectionModal from './modals/DeleteInspectionModal'
import EditInspectionModal from './modals/EditInspectionModal'

const InspectionModals: FC<InspectionModalsProps> = ({
	carId,
	inspectionId,
	inspection,
	upload,
	isLoading,
	showViewer,
	closeViewer,
	currentImage,
	bindContact,
	isBinding,
}) => {
	const photos = getImageResources(inspection?.photos)

	if (!inspection || !inspectionId) {
		return (
			<AnimatePresence>
				<AddInspectionModal carId={carId} key={1} />
			</AnimatePresence>
		)
	}

	return (
		<>
			<AnimatePresence>
				<EditInspectionModal carId={carId} inspection={inspection} key={2} />

				<DeleteInspectionModal
					carId={carId}
					inspectionId={inspectionId}
					key={3}
				/>

				<UploadPhotoModal isLoading={isLoading} callback={upload} key={4} />

				<ShowImageViewer
					photos={photos}
					showViewer={showViewer}
					closeViewer={closeViewer}
					currentImage={currentImage}
					key={5}
				/>

				<ClearGalleryModal
					entityId={inspectionId}
					EntityType={EntityType.INSPECTION}
					images={inspection.photos}
					key={6}
				/>

				<BindContactModal
					bindContact={bindContact}
					isBinding={isBinding}
					entityId={inspectionId}
					key={7}
				/>
			</AnimatePresence>
		</>
	)
}

export default InspectionModals
