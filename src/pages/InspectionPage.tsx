import { AnimatePresence } from 'motion/react'
import { FC } from 'react'
import { generatePath, useNavigate, useParams } from 'react-router-dom'

import ErrorState from '@/components/Inspection/ErrorState'
import InspectionForm from '@/components/Inspection/InspectionForm'
import NoInspectionState from '@/components/Inspection/NoInspectionState'
import Modal from '@/components/Modal'
import ButtonGoBack from '@/components/UI/ButtonGoBack'
import Loader from '@/components/UI/Loader'

import { useFetchInspection } from '@/hooks/inspection/useFetchInspection'
import useModal from '@/hooks/ui/useModal'

import { modalNames } from '@/config/modalConfig'
import { routes } from '@/config/routes'

const InspectionPage: FC = () => {
	const { checkQueryParam } = useModal()

	const { carId, inspectionId } = useParams()

	const navigate = useNavigate()
	const path = generatePath(routes.CAR_BY_ID, { carId: carId! })

	const {
		data: inspection,
		isLoading: isFetching,
		isError,
	} = useFetchInspection(inspectionId)

	if (isFetching) return <Loader color="gray" />
	if (isError) return <ErrorState />

	return (
		<>
			<ButtonGoBack
				label="car"
				onClick={() => navigate(path)}
				margin="0 0 5px 0"
				color="black"
			/>

			{!inspection && <NoInspectionState />}
			{inspection && <p>Inspection info</p>}

			<AnimatePresence>
				{checkQueryParam(modalNames.ADD_INSPECTION) && (
					<Modal
						key={modalNames.ADD_INSPECTION}
						title="Add technical inspection"
					>
						<InspectionForm mode="create" carId={carId!} />
					</Modal>
				)}
			</AnimatePresence>
		</>
	)
}

export default InspectionPage
