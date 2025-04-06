import { AnimatePresence } from 'motion/react'
import { FC } from 'react'

import ResendEmail from '@/components/Auth/ResendEmail'
import Gallery from '@/components/Gallery'
import ImageViewer from '@/components/Gallery/ImageViewer'
import Modal from '@/components/Modal'
import Profile from '@/components/Profile'
import EditEmail from '@/components/Profile/EditEmail'
import EditPassword from '@/components/Profile/EditPassword'
import EditProfile from '@/components/Profile/EditProfile'
import Paragraph from '@/components/UI/Paragraph'
import Uploader from '@/components/Uploader'

import { useLogout } from '@/hooks/auth/useLogout'
import useModal from '@/hooks/ui/useModal'
import { useProfileGallery } from '@/hooks/ui/useProfileGallery'
import useSubmit from '@/hooks/ui/useSubmit'
import { useRemoveProfile } from '@/hooks/user/useRemoveProfile'

import { routes } from '@/config/routes'

import { useUserStore } from '@/store/useUserStore'

import { uploadFileParams } from '@/utils/uploadFileParams'

import { EntityType } from '@/types/enums/EntityType'
import { isImage } from '@/types/guards/isImage'
import { AuthResponse } from '@/types/types/AuthResponse'
import { User } from '@/types/types/User'

const ProfilePage: FC = () => {
	const { checkQueryParam, modalNames, onClose } = useModal()

	const { mutateAsync: logout, isPending: isLogoutPending } = useLogout()
	const { mutateAsync: removeProfile, isPending: isRemoveProfilePending } =
		useRemoveProfile()

	const user = useUserStore((state) => state.user)

	const logoutAndNavigate = useSubmit<AuthResponse | null>({
		callback: logout,
		navigateTo: routes.HOME,
	})

	const deleteAndNavigate = useSubmit<User | null>({
		callback: removeProfile,
		navigateTo: routes.HOME,
		successMessage: 'The profile was successfully deleted',
	})

	const {
		actions: avatarActions,
		isLoading: isAvatarActionLoading,
		upload: uploadAvatar,
		showImageViewer: showAvatarViewer,
		currentImage: currentAvatar,
		closeViewer: closeAvatarViewer,
	} = useProfileGallery(EntityType.AVATARS)

	const {
		actions: posterActions,
		isLoading: isPosterActionLoading,
		upload: uploadPoster,
		showImageViewer: showPosterViewer,
		currentImage: currentPoster,
		closeViewer: closePosterViewer,
	} = useProfileGallery(EntityType.POSTERS)

	return (
		<>
			<Profile />

			<AnimatePresence>
				{checkQueryParam(modalNames.EDIT_EMAIL) && (
					<Modal key={modalNames.EDIT_EMAIL} title="Edit email address">
						<EditEmail />
					</Modal>
				)}

				{checkQueryParam(modalNames.EDIT_PASSWORD) && (
					<Modal key={modalNames.EDIT_PASSWORD} title="Edit password">
						<EditPassword />
					</Modal>
				)}

				{checkQueryParam(modalNames.EDIT_PROFILE) && (
					<Modal key={modalNames.EDIT_PROFILE} title="Edit profile">
						<EditProfile />
					</Modal>
				)}

				{checkQueryParam(modalNames.RESEND_EMAIL) && (
					<Modal key={modalNames.RESEND_EMAIL} title="Resend activation email">
						<ResendEmail />
					</Modal>
				)}

				{checkQueryParam(modalNames.EXIT_PROFILE) && (
					<Modal
						key={modalNames.EXIT_PROFILE}
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
						key={modalNames.DELETE_PROFILE}
						title="Do you want to delete your profile?"
						isDialog={true}
						isLoading={isRemoveProfilePending}
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

				{checkQueryParam(modalNames.USER_AVATARS) && (
					<Modal key={modalNames.USER_AVATARS} title="Avatars">
						{user && isImage(user.avatars) && (
							<Gallery
								images={user?.avatars.resources}
								isOverlay={true}
								overlayActions={avatarActions}
								isActionLoading={isAvatarActionLoading}
							/>
						)}
					</Modal>
				)}

				{checkQueryParam(modalNames.USER_POSTERS) && (
					<Modal key={modalNames.USER_POSTERS} title="Posters">
						{user && isImage(user.posters) && (
							<Gallery
								images={user?.posters.resources}
								isOverlay={true}
								overlayActions={posterActions}
								isActionLoading={isPosterActionLoading}
							/>
						)}
					</Modal>
				)}

				{checkQueryParam(modalNames.UPLOAD_AVATAR) && (
					<Modal key={modalNames.UPLOAD_AVATAR} title="Upload avatar">
						<Uploader
							fileName="image"
							fileTypes={uploadFileParams.types}
							fileSize={uploadFileParams.size}
							isLoading={isAvatarActionLoading}
							callback={uploadAvatar}
						/>
					</Modal>
				)}

				{checkQueryParam(modalNames.UPLOAD_POSTER) && (
					<Modal key={modalNames.UPLOAD_POSTER} title="Upload poster">
						<Uploader
							fileName="image"
							fileTypes={uploadFileParams.types}
							fileSize={uploadFileParams.size}
							isLoading={isPosterActionLoading}
							callback={uploadPoster}
						/>
					</Modal>
				)}

				{showAvatarViewer && (
					<ImageViewer
						imageUrl={currentAvatar}
						closeViewer={closeAvatarViewer}
					/>
				)}

				{showPosterViewer && (
					<ImageViewer
						imageUrl={currentPoster}
						closeViewer={closePosterViewer}
					/>
				)}
			</AnimatePresence>
		</>
	)
}

export default ProfilePage
