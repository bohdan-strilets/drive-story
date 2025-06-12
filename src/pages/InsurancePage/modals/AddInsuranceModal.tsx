import { FC } from 'react'

import InsuranceForm from '@/components/Insurance/InsuranceForm'
import Modal from '@/components/Modal'

import useModal from '@/hooks/ui/useModal'

import { modalNames } from '@/config/modalConfig'

import { AddInsuranceModalProps } from '@/types/props/Insurance/AddInsuranceModalProps'

const AddInsuranceModal: FC<AddInsuranceModalProps> = ({ carId }) => {
	const { checkQueryParam } = useModal()

	return (
		checkQueryParam(modalNames.ADD_INSURANCE) && (
			<Modal title="Add insurance policy">
				<InsuranceForm mode="create" carId={carId} />
			</Modal>
		)
	)
}

export default AddInsuranceModal
