import { FC } from 'react'

import InspectionForm from '@/components/Inspection/InspectionForm'
import Modal from '@/components/Modal'

import useModal from '@/hooks/ui/useModal'

import { modalNames } from '@/config/modalConfig'

import { EditInspectionModalProps } from '@/types/props/Inspection/EditInspectionModalProps'

const EditInspectionModal: FC<EditInspectionModalProps> = ({
	carId,
	inspection,
}) => {
	const { checkQueryParam } = useModal()

	return (
		checkQueryParam(modalNames.EDIT_INSPECTION) && (
			<Modal title="Edit technical inspection information">
				<InspectionForm mode="edit" carId={carId} inspection={inspection} />
			</Modal>
		)
	)
}

export default EditInspectionModal
