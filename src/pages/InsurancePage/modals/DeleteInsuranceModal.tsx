import { FC } from 'react'
import { generatePath } from 'react-router-dom'

import Modal from '@/components/Modal'
import Paragraph from '@/components/UI/Paragraph'

import { useDeleteInsurance } from '@/hooks/insurance/useDeleteInsurance'
import useModal from '@/hooks/ui/useModal'
import useSubmit from '@/hooks/ui/useSubmit'

import { modalNames } from '@/config/modalConfig'
import { routes } from '@/config/routes'

import { DeleteInsuranceModalProps } from '@/types/props/Insurance/DeleteInsuranceModalProps'
import { Insurance } from '@/types/types/Insurance'

const DeleteInsuranceModal: FC<DeleteInsuranceModalProps> = ({
	carId,
	insuranceId,
}) => {
	const { checkQueryParam, onClose } = useModal()

	const path = generatePath(routes.CAR_BY_ID, { carId: carId })

	const { mutateAsync: deleteInsurance, isPending } = useDeleteInsurance()

	const deleteAndNavigate = useSubmit<Insurance | null, string | undefined>({
		callback: deleteInsurance,
		navigateTo: path,
		successMessage: 'The insurance policy has been successfully deleted',
	})

	return (
		checkQueryParam(modalNames.DELETE_INSURANCE) && (
			<Modal
				title="Delete insurance policy?"
				isDialog={true}
				isLoading={isPending}
				negativeBtnLabel="no"
				positiveBtnLabel="yes"
				negativeCallback={onClose}
				positiveCallback={() => deleteAndNavigate(insuranceId)}
			>
				<Paragraph color="black" margin="0 0 15px 0">
					Are you sure you want to delete your current insurance policy
					information? The information will be lost forever.
				</Paragraph>
			</Modal>
		)
	)
}

export default DeleteInsuranceModal
