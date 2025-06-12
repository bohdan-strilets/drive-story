import { AnimatePresence } from 'motion/react'
import { FC } from 'react'

import { getImageResources } from '@/utils/getImageResources'

import { InsuranceModalsProps } from '@/types/props/Insurance/InsuranceModalsProps'

import AddInsuranceModal from './modals/AddInsuranceModal'
import BindContactModal from './modals/BindContactModal'
import ClearGalleryModal from './modals/ClearGalleryModal'
import DeleteInsuranceModal from './modals/DeleteInsuranceModal'
import EditInsuranceModal from './modals/EditInsuranceModal'
import ShowImageViewer from './modals/ShowImageViewer'
import UploadPhotoModal from './modals/UploadPhotoModal'

const InsuranceModals: FC<InsuranceModalsProps> = ({
	carId,
	insuranceId,
	insurance,
	isLoading,
	upload,
	showViewer,
	closeViewer,
	currentImage,
	bindContact,
	isBinding,
}) => {
	const photos = getImageResources(insurance?.photos)

	if (!insurance || !insuranceId) {
		return (
			<AnimatePresence>
				<AddInsuranceModal carId={carId} key={1} />
			</AnimatePresence>
		)
	}

	return (
		<>
			<AnimatePresence>
				<EditInsuranceModal carId={carId} insurance={insurance} key={2} />

				<DeleteInsuranceModal carId={carId} insuranceId={insuranceId} key={3} />

				<UploadPhotoModal isLoading={isLoading} upload={upload} key={4} />

				<ShowImageViewer
					photos={photos}
					showViewer={showViewer}
					closeViewer={closeViewer}
					currentImage={currentImage}
					key={5}
				/>

				<ClearGalleryModal
					insuranceId={insuranceId}
					images={insurance.photos}
					key={6}
				/>

				<BindContactModal
					bindContact={bindContact}
					isBinding={isBinding}
					key={7}
				/>
			</AnimatePresence>
		</>
	)
}

export default InsuranceModals
