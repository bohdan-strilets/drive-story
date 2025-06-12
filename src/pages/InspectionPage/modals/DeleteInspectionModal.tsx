import { FC } from 'react'
import { generatePath } from 'react-router-dom'

import Modal from '@/components/Modal'
import Paragraph from '@/components/UI/Paragraph'

import { useDeleteInspection } from '@/hooks/inspection/useDeleteInspection'
import useModal from '@/hooks/ui/useModal'
import useSubmit from '@/hooks/ui/useSubmit'

import { modalNames } from '@/config/modalConfig'
import { routes } from '@/config/routes'

import { DeleteInspectionModalProps } from '@/types/props/Inspection/DeleteInspectionModalProps'
import { Inspection } from '@/types/types/Inspection'

const DeleteInspectionModal: FC<DeleteInspectionModalProps> = ({
	carId,
	inspectionId,
}) => {
	const { checkQueryParam, onClose } = useModal()

	const path = generatePath(routes.CAR_BY_ID, { carId: carId })

	const { mutateAsync: deleteInspection, isPending } = useDeleteInspection()

	const deleteAndNavigate = useSubmit<Inspection | null, string | undefined>({
		callback: deleteInspection,
		navigateTo: path,
		successMessage: 'The technical inspection has been successfully deleted',
	})

	return (
		checkQueryParam(modalNames.DELETE_INSPECTION) && (
			<Modal
				title="Delete technical inspection?"
				isDialog={true}
				isLoading={isPending}
				negativeBtnLabel="no"
				positiveBtnLabel="yes"
				negativeCallback={onClose}
				positiveCallback={() => deleteAndNavigate(inspectionId)}
			>
				<Paragraph color="black" margin="0 0 15px 0">
					Are you sure you want to delete your current technical inspection
					information? The information will be lost forever.
				</Paragraph>
			</Modal>
		)
	)
}

export default DeleteInspectionModal
