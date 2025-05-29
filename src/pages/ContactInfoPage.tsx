import { AnimatePresence } from 'motion/react'
import { FC } from 'react'
import { useParams } from 'react-router-dom'

import ImageViewer from '@/components/Gallery/ImageViewer'
import Modal from '@/components/Modal'
import ContactInfo from '@/components/PhoneBook/ContactInfo'
import ErrorState from '@/components/PhoneBook/ErrorState'
import Loader from '@/components/UI/Loader'
import Uploader from '@/components/Uploader'

import { useFetchContact } from '@/hooks/contact/useFetchContact'
import { useGalleryManager } from '@/hooks/ui/useGalleryManager'
import useModal from '@/hooks/ui/useModal'

import { modalNames } from '@/config/modalConfig'

import { uploadFileParams } from '@/utils/uploadFileParams'

import { EntityType } from '@/types/enums/EntityType'

const ContactInfoPage: FC = () => {
	const { contactId } = useParams()
	const { checkQueryParam } = useModal()

	const { data: contact, isLoading, isError } = useFetchContact(contactId)

	const {
		actions: imageActions,
		isLoading: isImageLoading,
		upload: uploadImage,
		showImageViewer: showImageViewer,
		currentImage: currentImage,
		closeViewer: closeImageViewer,
	} = useGalleryManager({
		entityType: EntityType.CONTACTS,
		entityId: contactId,
	})

	if (isLoading) return <Loader color="gray" />
	if (isError) return <ErrorState />

	return (
		<>
			{contact && (
				<ContactInfo
					contact={contact}
					imageActions={imageActions}
					isActionLoading={isImageLoading}
				/>
			)}

			<AnimatePresence>
				{checkQueryParam(modalNames.UPLOAD_CONTACT_PHOTO) && (
					<Modal key={modalNames.UPLOAD_CONTACT_PHOTO} title="Upload photo">
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
			</AnimatePresence>
		</>
	)
}

export default ContactInfoPage
