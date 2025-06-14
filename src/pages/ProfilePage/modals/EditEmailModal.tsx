import { FC } from 'react'

import Modal from '@/components/Modal'
import EditEmail from '@/components/Profile/EditEmail'

import useModal from '@/hooks/ui/useModal'

import { modalNames } from '@/config/modalConfig'

import { EditEmailModalProps } from '@/types/props/Profile/EditEmailModalProps'

const EditEmailModal: FC<EditEmailModalProps> = ({ user }) => {
	const { checkQueryParam } = useModal()

	return (
		checkQueryParam(modalNames.EDIT_EMAIL) &&
		user && (
			<Modal title="Edit email address">
				<EditEmail email={user.email} />
			</Modal>
		)
	)
}

export default EditEmailModal
