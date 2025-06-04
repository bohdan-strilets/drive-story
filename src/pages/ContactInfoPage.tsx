import { AnimatePresence } from 'motion/react'
import { FC } from 'react'
import { useParams } from 'react-router-dom'

import ImageViewer from '@/components/Gallery/ImageViewer'
import Modal from '@/components/Modal'
import ContactForm from '@/components/PhoneBook/ContactForm'
import ContactInfo from '@/components/PhoneBook/ContactInfo'
import ErrorState from '@/components/PhoneBook/ErrorState'
import Loader from '@/components/UI/Loader'
import Paragraph from '@/components/UI/Paragraph'
import Uploader from '@/components/Uploader'

import { useDeleteContact } from '@/hooks/contact/useDeleteContact'
import { useFetchContact } from '@/hooks/contact/useFetchContact'
import { useDeleteAllImages } from '@/hooks/image/useDeleteAllImages'
import { useGalleryManager } from '@/hooks/ui/useGalleryManager'
import useModal from '@/hooks/ui/useModal'
import useSubmit from '@/hooks/ui/useSubmit'

import { modalNames } from '@/config/modalConfig'
import { routes } from '@/config/routes'

import { getImageId } from '@/utils/getImageId'
import { uploadFileParams } from '@/utils/uploadFileParams'

import { EntityType } from '@/types/enums/EntityType'
import { DeleteImagesParams } from '@/types/params/DeleteImagesParams'
import { Contact } from '@/types/types/Contact'
import { Image } from '@/types/types/Image'

const ContactInfoPage: FC = () => {
	const { contactId } = useParams()
	const { checkQueryParam, onClose } = useModal()

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

	const { mutateAsync: deleteContact, isPending: isDeleteContact } =
		useDeleteContact()

	const deleteAndNavigate = useSubmit<Contact | null, string | undefined>({
		callback: deleteContact,
		navigateTo: routes.PHONE_BOOK,
		successMessage: 'The contact has been successfully deleted',
	})

	const { mutateAsync: deleteAllImages, isPending: isDeleteallImages } =
		useDeleteAllImages()

	const imageId = getImageId<Contact>(contact)

	const deleteImagesParams: DeleteImagesParams = {
		entityId: contactId,
		imageId,
		entityType: EntityType.INSURANCE,
	}

	const clearGallery = useSubmit<Image | null, DeleteImagesParams>({
		callback: deleteAllImages,
		isCloseModal: true,
		successMessage: 'All photos were successfully deleted',
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

				{checkQueryParam(modalNames.EDIT_CONTACT) && (
					<Modal key={modalNames.EDIT_CONTACT} title="Edit contact information">
						<ContactForm mode="edit" contact={contact} />
					</Modal>
				)}

				{checkQueryParam(modalNames.DELETE_CONTACT) && (
					<Modal
						key={modalNames.DELETE_CONTACT}
						title="Delete insurance policy?"
						isDialog={true}
						isLoading={isDeleteContact}
						negativeBtnLabel="no"
						positiveBtnLabel="yes"
						negativeCallback={onClose}
						positiveCallback={() => deleteAndNavigate(contact?._id)}
					>
						<Paragraph color="black" margin="0 0 15px 0">
							Are you sure you want to delete this contact from your phone book?
						</Paragraph>
					</Modal>
				)}

				{checkQueryParam(modalNames.CLEAR_CONTACT_GALLERY) && (
					<Modal
						key={modalNames.CLEAR_CONTACT_GALLERY}
						title="Clear gallery?"
						isDialog={true}
						isLoading={isDeleteallImages}
						negativeBtnLabel="no"
						positiveBtnLabel="yes"
						negativeCallback={onClose}
						positiveCallback={() => clearGallery(deleteImagesParams)}
					>
						<Paragraph color="black" margin="0 0 15px 0">
							After confirmation, all images from the gallery will be deleted
							for this item. Do you want to continue?
						</Paragraph>
					</Modal>
				)}
			</AnimatePresence>
		</>
	)
}

export default ContactInfoPage
