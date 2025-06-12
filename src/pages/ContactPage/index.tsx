import { FC } from 'react'
import { useParams } from 'react-router-dom'

import { useFetchContact } from '@/hooks/contact/useFetchContact'
import { useGalleryManager } from '@/hooks/ui/useGalleryManager'
import { useViewerManager } from '@/hooks/ui/useViewerManager'

import { EntityType } from '@/types/enums/EntityType'

import ContactFetching from './ContactFetching'
import ContactMainView from './ContactMainView'
import ContactModals from './ContactModals'

const ContactPage: FC = () => {
	const { contactId } = useParams()

	const {
		data: contact,
		isLoading: isFetching,
		isError,
	} = useFetchContact(contactId)

	const { closeViewer, currentImage, showViewer, openViewer } =
		useViewerManager()

	const {
		actions,
		isLoading: isProcessing,
		upload,
	} = useGalleryManager({
		entityType: EntityType.CONTACTS,
		entityId: contactId,
		openViewer,
	})

	if (isFetching || isError || !contactId) {
		return (
			<ContactFetching
				isFetching={isFetching}
				isError={isError}
				contactId={contactId}
			/>
		)
	}

	return (
		<>
			<ContactMainView
				contact={contact}
				isProcessing={isProcessing}
				overlayActions={actions}
			/>

			<ContactModals
				contact={contact}
				contactId={contactId}
				isLoading={isProcessing}
				upload={upload}
				showViewer={showViewer}
				currentImage={currentImage}
				closeViewer={closeViewer}
			/>
		</>
	)
}

export default ContactPage
