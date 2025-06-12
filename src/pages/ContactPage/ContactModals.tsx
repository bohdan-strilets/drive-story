import { AnimatePresence } from 'motion/react'
import { FC } from 'react'

import { getImageResources } from '@/utils/getImageResources'

import { ContactModalsProps } from '@/types/props/PhoneBook/ContactModalsProps'

import ClearGalleryModal from './modals/ClearGalleryModal'
import DeleteContactModal from './modals/DeleteContactModal'
import EditContactModal from './modals/EditContactModal'
import ShowImageViewer from './modals/ShowImageViewer'
import UploadPhotoModal from './modals/UploadPhotoModal'

const ContactModals: FC<ContactModalsProps> = ({
	contact,
	contactId,
	isLoading,
	upload,
	showViewer,
	currentImage,
	closeViewer,
}) => {
	const photos = getImageResources(contact?.photos)

	return (
		<AnimatePresence>
			<UploadPhotoModal isLoading={isLoading} upload={upload} key={1} />

			<ShowImageViewer
				showViewer={showViewer}
				currentImage={currentImage}
				closeViewer={closeViewer}
				photos={photos}
				key={2}
			/>

			<EditContactModal contact={contact} key={3} />

			<DeleteContactModal contactId={contactId} key={4} />

			<ClearGalleryModal
				contactId={contactId}
				images={contact?.photos}
				key={5}
			/>
		</AnimatePresence>
	)
}

export default ContactModals
