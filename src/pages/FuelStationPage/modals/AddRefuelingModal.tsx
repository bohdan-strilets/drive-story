import { FC } from 'react'

import RefuelingForm from '@/components/FuelStation/RefuelingForm'
import Modal from '@/components/Modal'

import useModal from '@/hooks/ui/useModal'

import { modalNames } from '@/config/modalConfig'

import { AddRefuelingModalProps } from '@/types/props/Refueling/AddRefuelingModalProps'

const AddRefuelingModal: FC<AddRefuelingModalProps> = ({ carId }) => {
	const { checkQueryParam } = useModal()

	return (
		checkQueryParam(modalNames.ADD_REFUELING) && (
			<Modal title="Add new refueling">
				<RefuelingForm mode="create" carId={carId} />
			</Modal>
		)
	)
}

export default AddRefuelingModal
