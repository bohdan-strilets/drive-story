import { FC } from 'react'

import Modal from '@/components/Modal'
import EditPassword from '@/components/Profile/EditPassword'

import useModal from '@/hooks/ui/useModal'

import { modalNames } from '@/config/modalConfig'

const EditPasswordModal: FC = () => {
	const { checkQueryParam } = useModal()

	return (
		checkQueryParam(modalNames.EDIT_PASSWORD) && (
			<Modal title="Edit password">
				<EditPassword />
			</Modal>
		)
	)
}

export default EditPasswordModal
