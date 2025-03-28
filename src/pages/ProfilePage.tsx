import { AnimatePresence } from 'motion/react'
import { FC } from 'react'

import ResendEmail from '@/components/Auth/ResendEmail'
import Modal from '@/components/Modal'
import Profile from '@/components/Profile'
import EditEmail from '@/components/Profile/EditEmail'
import EditPassword from '@/components/Profile/EditPassword'
import EditProfile from '@/components/Profile/EditProfile'

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

				{checkQueryParam(modalNames.EDIT_PASSWORD) && (
					<Modal title="Edit password">
						<EditPassword />
					</Modal>
				)}

				{checkQueryParam(modalNames.EDIT_PROFILE) && (
					<Modal title="Edit profile">
						<EditProfile />
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
