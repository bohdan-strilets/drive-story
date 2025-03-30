import { AnimatePresence } from 'motion/react'
import { FC } from 'react'

import ResendEmail from '@/components/Auth/ResendEmail'
import Modal from '@/components/Modal'
import Profile from '@/components/Profile'
import EditEmail from '@/components/Profile/EditEmail'
import EditPassword from '@/components/Profile/EditPassword'
import EditProfile from '@/components/Profile/EditProfile'
import Paragraph from '@/components/UI/Paragraph'
import Uploader from '@/components/Uploader'

import { useLogout } from '@/hooks/auth/useLogout'
import { useUploadImage } from '@/hooks/image/useUploadImage'
import useModal from '@/hooks/ui/useModal'
import useSubmit from '@/hooks/ui/useSubmit'
import { useRemoveProfile } from '@/hooks/user/useRemoveProfile'

import { routes } from '@/config/routes'

import { useUserStore } from '@/store/useUserStore'

import { uploadFileParams } from '@/utils/uploadFileParams'

import { EntityType } from '@/types/enums/EntityType'
import { ApiResponse } from '@/types/types/ApiResponse'
import { AuthResponse } from '@/types/types/AuthResponse'
import { Image } from '@/types/types/Image'
import { User } from '@/types/types/User'

const ProfilePage: FC = () => {
	const { checkQueryParam, modalNames, onClose } = useModal()

	const { mutateAsync: logout, isPending: isLogoutPending } = useLogout()
	const { mutateAsync: removeProfile, isPending: isRemoveProfilePending } =
		useRemoveProfile()
	const { mutateAsync: uploadImage, isPending: isUploadImagePending } =
		useUploadImage()

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

	const uploadAvatar = async (
		file: FormData
	): Promise<ApiResponse<Image | null>> => {
		return await uploadImage({
			entityId: user?._id as string,
			entityType: EntityType.AVATARS,
			file,
		})
	}

	const uploadPoster = async (
		file: FormData
	): Promise<ApiResponse<Image | null>> => {
		return await uploadImage({
			entityId: user?._id as string,
			entityType: EntityType.POSTERS,
			file,
		})
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
					<Modal title="Avatars">
						<p>Avatars gallery</p>
					</Modal>
				)}

				{checkQueryParam(modalNames.USER_POSTERS) && (
					<Modal title="Posters">
						<p>Posters gallery</p>
					</Modal>
				)}

				{checkQueryParam(modalNames.UPLOAD_AVATAR) && (
					<Modal title="Upload avatar">
						<Uploader
							fileName="image"
							fileTypes={uploadFileParams.types}
							fileSize={uploadFileParams.size}
							isLoading={isUploadImagePending}
							callback={uploadAvatar}
						/>
					</Modal>
				)}

				{checkQueryParam(modalNames.UPLOAD_POSTER) && (
					<Modal title="Upload poster">
						<Uploader
							fileName="image"
							fileTypes={uploadFileParams.types}
							fileSize={uploadFileParams.size}
							isLoading={isUploadImagePending}
							callback={uploadPoster}
						/>
					</Modal>
				)}
			</AnimatePresence>
		</>
	)
}

export default ProfilePage
