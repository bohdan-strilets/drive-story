import { FC } from 'react'

import Modal from '@/components/Modal'
import BindContact from '@/components/PhoneBook/BindContact'

import useModal from '@/hooks/ui/useModal'

import { modalNames } from '@/config/modalConfig'

import { BindContactModalProps } from '@/types/props/Insurance/BindContactModalProps'
import { Insurance } from '@/types/types/Insurance'

const BindContactModal: FC<BindContactModalProps> = ({
	bindContact,
	isBinding,
}) => {
	const { checkQueryParam } = useModal()

	return (
		checkQueryParam(modalNames.BIND_INSURANCE_CONTACT) && (
			<Modal title="Bind contact">
				<BindContact<Insurance>
					isBinding={isBinding}
					bindContact={bindContact}
				/>
			</Modal>
		)
	)
}

export default BindContactModal
