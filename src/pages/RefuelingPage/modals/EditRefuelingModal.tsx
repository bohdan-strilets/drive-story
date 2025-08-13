import { FC } from 'react'

import RefuelingForm from '@/components/FuelStation/RefuelingForm'
import Modal from '@/components/Modal'

import useModal from '@/hooks/ui/useModal'

import { modalNames } from '@/config/modalConfig'

import { EditRefuelingModalProps } from '@/types/props/Refueling/EditRefuelingModalProps'

const EditRefuelingModal: FC<EditRefuelingModalProps> = ({ refueling }) => {
	const { checkQueryParam } = useModal()

	return (
		checkQueryParam(modalNames.EDIT_REFUELING) && (
			<Modal title="Edit refueling information">
				<RefuelingForm mode="edit" refueling={refueling} />
			</Modal>
		)
	)
}

export default EditRefuelingModal
