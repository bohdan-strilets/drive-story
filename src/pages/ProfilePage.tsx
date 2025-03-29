import { AnimatePresence } from 'motion/react'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

import ResendEmail from '@/components/Auth/ResendEmail'
import Modal from '@/components/Modal'
import Profile from '@/components/Profile'
import EditEmail from '@/components/Profile/EditEmail'
import EditPassword from '@/components/Profile/EditPassword'
import EditProfile from '@/components/Profile/EditProfile'
import Paragraph from '@/components/UI/Paragraph'

import { useLogout } from '@/hooks/auth/useLogout'
import useModal from '@/hooks/ui/useModal'
import { useRemoveProfile } from '@/hooks/user/useRemoveProfile'

import { routes } from '@/config/routes'

const ProfilePage: FC = () => {
	const { checkQueryParam, modalNames, onClose } = useModal()
	const { mutateAsync: logout, isPending: isLogoutPending } = useLogout()
	const { mutateAsync: removeProfile, isPending: isRemovePending } =
		useRemoveProfile()
	const navigate = useNavigate()

	const logoutAndNavigate = () => {
		logout()
		navigate(routes.HOME)
	}

	const deleteAndNavigate = () => {
		removeProfile()
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
						isLoading={isLogoutPending}
						negativeBtnLabel="no"
						positiveBtnLabel="yes"
						negativeCallback={onClose}
						positiveCallback={logoutAndNavigate}
					>
						<p>Do you want to log out of your current account?</p>
					</Modal>
				)}

				{checkQueryParam(modalNames.DELETE_PROFILE) && (
					<Modal
						title="Do you want to delete your profile?"
						isDialog={true}
						isLoading={isRemovePending}
						negativeBtnLabel="no"
						positiveBtnLabel="yes"
						negativeCallback={onClose}
						positiveCallback={deleteAndNavigate}
					>
						<Paragraph color={'black'} margin="0 0 15px 0">
							Are you sure you want to permanently delete your profile and all
							associated data? Please be aware that this action is irreversible,
							and we will not be able to recover your account and information
							after deletion.
						</Paragraph>
						<Paragraph color={'red'}>
							All your personal information, uploaded files, and activity
							history will be lost forever.
						</Paragraph>
					</Modal>
				)}
			</AnimatePresence>
		</>
	)
}

export default ProfilePage
