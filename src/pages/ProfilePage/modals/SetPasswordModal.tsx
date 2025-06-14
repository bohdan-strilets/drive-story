import { FC } from 'react'

import Modal from '@/components/Modal'
import SetPassword from '@/components/Profile/SetPassword'

import useModal from '@/hooks/ui/useModal'

import { modalNames } from '@/config/modalConfig'

const SetPasswordModal: FC = () => {
	const { checkQueryParam } = useModal()

	return (
		checkQueryParam(modalNames.SET_PASSWORD) && (
			<Modal title="Set password">
				<SetPassword />
			</Modal>
		)
	)
}

export default SetPasswordModal
