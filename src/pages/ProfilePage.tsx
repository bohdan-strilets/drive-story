import { AnimatePresence } from 'motion/react'
import { FC } from 'react'

import ResendEmail from '@/components/Auth/ResendEmail'
import Modal from '@/components/Modal'
import Profile from '@/components/Profile'
import EditEmail from '@/components/Profile/EditEmail'

import useModal from '@/hooks/ui/useModal'

const ProfilePage: FC = () => {
	const { checkQueryParam, modalNames } = useModal()

	return (
		<>
			<Profile />

			<AnimatePresence>
				{checkQueryParam(modalNames.EDIT_EMAIL) && (
					<Modal title="Edit email address">
						<EditEmail />
					</Modal>
				)}

				{checkQueryParam(modalNames.RESEND_EMAIL) && (
					<Modal title="Resend activation email">
						<ResendEmail />
					</Modal>
				)}
			</AnimatePresence>
		</>
	)
}

export default ProfilePage
