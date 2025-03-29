import { AnimatePresence } from 'motion/react'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

import ResendEmail from '@/components/Auth/ResendEmail'
import Modal from '@/components/Modal'
import Profile from '@/components/Profile'
import EditEmail from '@/components/Profile/EditEmail'
import EditPassword from '@/components/Profile/EditPassword'
import EditProfile from '@/components/Profile/EditProfile'

import { useLogout } from '@/hooks/auth/useLogout'
import useModal from '@/hooks/ui/useModal'

import { routes } from '@/config/routes'

const ProfilePage: FC = () => {
	const { checkQueryParam, modalNames, onClose } = useModal()
	const { mutateAsync: logout, isPending } = useLogout()
	const navigate = useNavigate()

	const logoutAndNavigate = () => {
		logout()
		navigate(routes.HOME)
	}

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

				{checkQueryParam(modalNames.EXIT_PROFILE) && (
					<Modal
						title="Logout from profile?"
						isDialog={true}
						isLoading={isPending}
						negativeBtnLabel="no"
						positiveBtnLabel="yes"
						negativeCallback={onClose}
						positiveCallback={logoutAndNavigate}
					>
						<p>Do you want to log out of your current account?</p>
					</Modal>
				)}
			</AnimatePresence>
		</>
	)
}

export default ProfilePage
