import { FC } from 'react'

import Modal from '@/components/Modal'
import ContactForm from '@/components/PhoneBook/ContactForm'

import useModal from '@/hooks/ui/useModal'

import { modalNames } from '@/config/modalConfig'

const AddContactModal: FC = () => {
	const { checkQueryParam } = useModal()

	return (
		checkQueryParam(modalNames.ADD_CONTACT) && (
			<Modal title="Add new contact">
				<ContactForm mode="create" />
			</Modal>
		)
	)
}

export default AddContactModal
