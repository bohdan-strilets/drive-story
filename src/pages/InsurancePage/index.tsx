import { FC } from 'react'
import { generatePath, useNavigate, useParams } from 'react-router-dom'

import ButtonGoBack from '@/components/UI/ButtonGoBack'

import { useBindContact } from '@/hooks/insurance/useBindContact'
import { useFetchInsurance } from '@/hooks/insurance/useFetchInsurance'
import { useGalleryManager } from '@/hooks/ui/useGalleryManager'
import useSubmit from '@/hooks/ui/useSubmit'
import { useViewerManager } from '@/hooks/ui/useViewerManager'

import { routes } from '@/config/routes'

import { EntityType } from '@/types/enums/EntityType'
import { BindContactParams } from '@/types/params/BindContactParams'
import { Insurance } from '@/types/types/Insurance'

import InsuranceFetching from './InsuranceFetching'
import InsuranceMainView from './InsuranceMainView'
import InsuranceModals from './InsuranceModals'

const InsurancePage: FC = () => {
	const { carId, insuranceId } = useParams()

	const navigate = useNavigate()
	const path = generatePath(routes.CAR_BY_ID, { carId: carId! })

	const {
		data: insurance,
		isLoading: isFetching,
		isError,
	} = useFetchInsurance(insuranceId)

	const { closeViewer, currentImage, showViewer, openViewer } =
		useViewerManager()

	const {
		actions,
		isLoading: isProcessing,
		upload,
	} = useGalleryManager({
		entityType: EntityType.INSURANCE,
		entityId: insuranceId,
		openViewer,
	})

	const { mutateAsync: bindContact, isPending: isBinding } = useBindContact()

	const submitBindContact = useSubmit<Insurance | null, BindContactParams>({
		callback: bindContact,
		isCloseModal: true,
		successMessage: 'Contact bound successfully',
	})

	if (!carId || isError || isFetching)
		return (
			<InsuranceFetching
				isError={isError}
				isFetching={isFetching}
				carId={carId}
				insuranceId={insuranceId}
			/>
		)

	return (
		<>
			<ButtonGoBack
				label="car"
				onClick={() => navigate(path)}
				margin="0 0 5px 0"
				color="black"
			/>

			<InsuranceMainView
				insurance={insurance}
				overlayActions={actions}
				isProcessing={isProcessing}
				isBinding={isBinding}
				bindContact={submitBindContact}
			/>

			<InsuranceModals
				carId={carId}
				insuranceId={insuranceId}
				insurance={insurance}
				upload={upload}
				isLoading={isProcessing}
				showViewer={showViewer}
				closeViewer={closeViewer}
				currentImage={currentImage}
				isBinding={isBinding}
				bindContact={submitBindContact}
			/>
		</>
	)
}

export default InsurancePage
