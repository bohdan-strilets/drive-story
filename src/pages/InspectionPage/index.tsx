import { FC } from 'react'
import { generatePath, useNavigate, useParams } from 'react-router-dom'

import ButtonGoBack from '@/components/UI/ButtonGoBack'

import { useBindContact } from '@/hooks/inspection/useBindContact'
import { useClearContact } from '@/hooks/inspection/useClearContact'
import { useFetchInspection } from '@/hooks/inspection/useFetchInspection'
import { useGalleryManager } from '@/hooks/ui/useGalleryManager'
import useSubmit from '@/hooks/ui/useSubmit'
import { useViewerManager } from '@/hooks/ui/useViewerManager'

import { routes } from '@/config/routes'

import { EntityType } from '@/types/enums/EntityType'
import { BindContactParams } from '@/types/params/BindContactParams'
import { Inspection } from '@/types/types/Inspection'

import InspectionFetching from './InspectionFetching'
import InspectionMainView from './InspectionMainView'
import InspectionModals from './InspectionModals'

const InspectionPage: FC = () => {
	const { carId, inspectionId } = useParams()

	const navigate = useNavigate()
	const path = generatePath(routes.CAR_BY_ID, { carId: carId! })

	const {
		data: inspection,
		isLoading: isFetching,
		isError,
	} = useFetchInspection(inspectionId)

	const { closeViewer, currentImage, showViewer, openViewer } =
		useViewerManager()

	const {
		actions,
		isLoading: isProcessing,
		upload,
	} = useGalleryManager({
		entityType: EntityType.INSPECTION,
		entityId: inspectionId,
		openViewer,
	})

	const { mutateAsync: bindContact, isPending: isBinding } = useBindContact()
	const { mutateAsync: clearContact, isPending: isCleaning } = useClearContact()

	const submitBindContact = useSubmit<Inspection | null, BindContactParams>({
		callback: bindContact,
		isCloseModal: true,
		successMessage: 'Contact bound successfully',
	})

	const submitclearContact = useSubmit<Inspection | null, string | undefined>({
		callback: clearContact,
		isCloseModal: true,
		successMessage: 'The contact is no longer linked',
	})

	if (!carId || isError || isFetching) {
		return (
			<InspectionFetching
				isError={isError}
				isFetching={isFetching}
				carId={carId}
				inspectionId={inspectionId}
			/>
		)
	}

	return (
		<>
			<ButtonGoBack
				label="car"
				onClick={() => navigate(path)}
				margin="0 0 5px 0"
				color="black"
			/>

			<InspectionMainView
				inspection={inspection}
				overlayActions={actions}
				isProcessing={isProcessing}
				isCleaning={isCleaning}
				clearContact={submitclearContact}
			/>

			<InspectionModals
				carId={carId}
				inspectionId={inspectionId}
				inspection={inspection}
				upload={upload}
				bindContact={submitBindContact}
				isBinding={isBinding}
				currentImage={currentImage}
				showViewer={showViewer}
				closeViewer={closeViewer}
				isLoading={isProcessing}
			/>
		</>
	)
}

export default InspectionPage
