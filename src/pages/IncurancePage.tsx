import { AnimatePresence } from 'motion/react'
import { FC } from 'react'
import { useParams } from 'react-router-dom'

import ErrorState from '@/components/Insurance/ErrorState'
import Insurance from '@/components/Insurance/Insurance'
import InsuranceForm from '@/components/Insurance/InsuranceForm'
import Modal from '@/components/Modal'
import Loader from '@/components/UI/Loader'

import { useFetchInsurance } from '@/hooks/insurance/useFetchInsurance'
import useModal from '@/hooks/ui/useModal'

const IncurancePage: FC = () => {
	const { carId } = useParams()
	const { modalNames, checkQueryParam } = useModal()

	const {
		data: insurance,
		isLoading: isFetching,
		isError,
	} = useFetchInsurance(carId)

	if (isFetching) {
		return <Loader color="gray" />
	}

	if (isError) {
		return <ErrorState carId={carId ?? ''} />
	}

	return (
		<>
			<Insurance insurance={insurance} />

			<AnimatePresence>
				{checkQueryParam(modalNames.ADD_INSURANCE_POLICY) && (
					<Modal
						key={modalNames.ADD_INSURANCE_POLICY}
						title="Add insurance policy"
					>
						<InsuranceForm mode="create" />
					</Modal>
				)}

				{checkQueryParam(modalNames.EDIT_INSURANCE_POLICY) && (
					<Modal
						key={modalNames.EDIT_INSURANCE_POLICY}
						title="Edit insurance policy"
					>
						<InsuranceForm mode="edit" insurance={insurance} />
					</Modal>
				)}
			</AnimatePresence>
		</>
	)
}

export default IncurancePage
