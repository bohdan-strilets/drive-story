import { FC } from 'react'

import Modal from '@/components/Modal'
import Paragraph from '@/components/UI/Paragraph'

import { useDeleteContact } from '@/hooks/contact/useDeleteContact'
import useModal from '@/hooks/ui/useModal'
import useSubmit from '@/hooks/ui/useSubmit'

import { modalNames } from '@/config/modalConfig'
import { routes } from '@/config/routes'

import { DeleteContactModalProps } from '@/types/props/PhoneBook/DeleteContactModalProps'
import { Contact } from '@/types/types/Contact'

const DeleteContactModal: FC<DeleteContactModalProps> = ({ contactId }) => {
	const { checkQueryParam, onClose } = useModal()

	const { mutateAsync: deleteContact, isPending } = useDeleteContact()

	const deleteAndNavigate = useSubmit<Contact | null, string | undefined>({
		callback: deleteContact,
		navigateTo: routes.PHONE_BOOK,
		successMessage: 'The contact has been successfully deleted',
	})

	return (
		checkQueryParam(modalNames.DELETE_CONTACT) && (
			<Modal
				key={modalNames.DELETE_CONTACT}
				title="Delete insurance policy?"
				isDialog={true}
				isLoading={isPending}
				negativeBtnLabel="no"
				positiveBtnLabel="yes"
				negativeCallback={onClose}
				positiveCallback={() => deleteAndNavigate(contactId)}
			>
				<Paragraph color="black" margin="0 0 15px 0">
					Are you sure you want to delete this contact from your phone book?
				</Paragraph>
			</Modal>
		)
	)
}

export default DeleteContactModal
