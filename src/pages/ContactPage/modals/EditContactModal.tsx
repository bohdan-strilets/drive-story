import { FC } from 'react'

import Modal from '@/components/Modal'
import ContactForm from '@/components/PhoneBook/ContactForm'

import useModal from '@/hooks/ui/useModal'

import { modalNames } from '@/config/modalConfig'

import { EditContactModalProps } from '@/types/props/PhoneBook/EditContactModalProps'

const EditContactModal: FC<EditContactModalProps> = ({ contact }) => {
	const { checkQueryParam } = useModal()

	return (
		checkQueryParam(modalNames.EDIT_CONTACT) && (
			<Modal title="Edit contact information">
				<ContactForm mode="edit" contact={contact} />
			</Modal>
		)
	)
}

export default EditContactModal
