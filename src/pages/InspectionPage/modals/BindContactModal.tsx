import { FC } from 'react'

import Modal from '@/components/Modal'
import BindContact from '@/components/PhoneBook/BindContact'

import useModal from '@/hooks/ui/useModal'

import { modalNames } from '@/config/modalConfig'

import { BindContactModalProps } from '@/types/props/Inspection/BindContactModalProps'

const BindContactModal: FC<BindContactModalProps> = ({
	bindContact,
	isBinding,
	entityId,
}) => {
	const { checkQueryParam } = useModal()

	return (
		checkQueryParam(modalNames.BIND_INSPECTION_CONTACT) && (
			<Modal title="Bind contact">
				<BindContact
					isBinding={isBinding}
					bindContact={bindContact}
					entityId={entityId}
				/>
			</Modal>
		)
	)
}

export default BindContactModal
