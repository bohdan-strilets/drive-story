import { FC } from 'react'

import InsuranceForm from '@/components/Insurance/InsuranceForm'
import Modal from '@/components/Modal'

import useModal from '@/hooks/ui/useModal'

import { modalNames } from '@/config/modalConfig'

import { EditInsuranceModalProps } from '@/types/props/Insurance/EditInsuranceModalProps'

const EditInsuranceModal: FC<EditInsuranceModalProps> = ({
	carId,
	insurance,
}) => {
	const { checkQueryParam } = useModal()

	return (
		checkQueryParam(modalNames.EDIT_INSURANCE) && (
			<Modal title="Edit insurance policy">
				<InsuranceForm mode="edit" carId={carId} insurance={insurance} />
			</Modal>
		)
	)
}

export default EditInsuranceModal
