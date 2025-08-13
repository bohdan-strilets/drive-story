import { FC } from 'react'
import { generatePath } from 'react-router-dom'

import Modal from '@/components/Modal'
import Paragraph from '@/components/UI/Paragraph'

import { useDeleteFueling } from '@/hooks/fueling/useDeleteFueling'
import useModal from '@/hooks/ui/useModal'
import useSubmit from '@/hooks/ui/useSubmit'

import { modalNames } from '@/config/modalConfig'
import { routes } from '@/config/routes'

import { DeleteRefuelingModalProps } from '@/types/props/Refueling/DeleteRefuelingModalProps'
import { Fueling } from '@/types/types/Fueling'

const DeleteRefuelingModal: FC<DeleteRefuelingModalProps> = ({
	carId,
	refuelingId,
}) => {
	const { checkQueryParam, onClose } = useModal()

	const path = generatePath(routes.CAR_BY_ID, { carId: carId! })

	const { mutateAsync: deleteRefueling, isPending } = useDeleteFueling()

	const deleteAndNavigate = useSubmit<Fueling | null, string | undefined>({
		callback: deleteRefueling,
		navigateTo: path,
		successMessage: 'The fuel receipt has been successfully deleted',
	})

	return (
		checkQueryParam(modalNames.DELETE_REFUELING) && (
			<Modal
				title="Delete fuel receipt?"
				isDialog={true}
				isLoading={isPending}
				negativeBtnLabel="no"
				positiveBtnLabel="yes"
				negativeCallback={onClose}
				positiveCallback={() => deleteAndNavigate(refuelingId)}
			>
				<Paragraph color="black" margin="0 0 15px 0">
					Are you sure you want to delete your current fuel receipt information?
					The information will be lost forever.
				</Paragraph>
			</Modal>
		)
	)
}

export default DeleteRefuelingModal
