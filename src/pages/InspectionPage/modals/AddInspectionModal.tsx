import { FC } from 'react'

import InspectionForm from '@/components/Inspection/InspectionForm'
import Modal from '@/components/Modal'

import useModal from '@/hooks/ui/useModal'

import { modalNames } from '@/config/modalConfig'

import { AddInspectionModalProps } from '@/types/props/Inspection/AddInspectionModalProps'

const AddInspectionModal: FC<AddInspectionModalProps> = ({ carId }) => {
	const { checkQueryParam } = useModal()

	return (
		checkQueryParam(modalNames.ADD_INSPECTION) && (
			<Modal title="Add technical inspection">
				<InspectionForm mode="create" carId={carId} />
			</Modal>
		)
	)
}

export default AddInspectionModal
