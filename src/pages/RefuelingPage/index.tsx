import { FC } from 'react'
import { generatePath, useNavigate, useParams } from 'react-router-dom'

import RefuelingInfo from '@/components/FuelStation/RefuelingInfo'
import ButtonGoBack from '@/components/UI/ButtonGoBack'

import { useClearContact } from '@/hooks/fueling/useClearContact'
import { useFetchFueling } from '@/hooks/fueling/useFetchFueling'
import { useGalleryManager } from '@/hooks/ui/useGalleryManager'
import { useViewerManager } from '@/hooks/ui/useViewerManager'

import { routes } from '@/config/routes'

import { EntityType } from '@/types/enums/EntityType'

import RefuelingFetching from './RefuelingFetching'

const RefuelingPage: FC = () => {
	const { refuelingId, carId } = useParams()
	const navigate = useNavigate()

	const { data: refueling, isLoading, isError } = useFetchFueling(refuelingId)
	const path = generatePath(routes.REFUELING_BY_ID, {
		carId: carId!,
		refuelingId: refuelingId ?? '',
	})

	const { mutateAsync: clearContact, isPending: isCleaning } = useClearContact()

	const { openViewer } = useViewerManager()

	const { actions, isLoading: isProcessing } = useGalleryManager({
		entityType: EntityType.INSURANCE,
		entityId: refuelingId,
		openViewer,
	})

	if (isLoading || isError || !refuelingId) {
		return (
			<RefuelingFetching
				isFetching={isLoading}
				isError={isError}
				carId={carId}
				refuelingId={refuelingId}
			/>
		)
	}

	return (
		<>
			<ButtonGoBack
				label="fuel station"
				onClick={() => navigate(path)}
				margin="0 0 5px 0"
				color="black"
			/>

			{refueling && (
				<RefuelingInfo
					refueling={refueling}
					overlayActions={actions}
					isProcessing={isProcessing}
					clearContact={clearContact}
					isCleaning={isCleaning}
				/>
			)}
		</>
	)
}

export default RefuelingPage
