import { AnimatePresence } from 'motion/react'
import { FC } from 'react'

import ShowImageViewer from '@/components/Layout/ShowImageViewer'

import { useGalleryManager } from '@/hooks/ui/useGalleryManager'
import { useViewerManager } from '@/hooks/ui/useViewerManager'

import { getImageResources } from '@/utils/getImageResources'

import { EntityType } from '@/types/enums/EntityType'
import { ProfileModalsProps } from '@/types/props/Profile/ProfileModalsProps'

import AvatarsModal from './modals/AvatarsModal'
import DeleteProfileModal from './modals/DeleteProfileModal'
import EditEmailModal from './modals/EditEmailModal'
import EditPasswordModal from './modals/EditPasswordModal'
import EditProfileMiodal from './modals/EditProfileMiodal'
import PostersModal from './modals/PostersModal'
import ResendEmailModal from './modals/ResendEmailModal'
import SetPasswordModal from './modals/SetPasswordModal'
import UploadAvatarModal from './modals/UploadAvatarModal'
import UploadPosterModal from './modals/UploadPosterModal'

const ProfileModals: FC<ProfileModalsProps> = ({ user }) => {
	const {
		closeViewer: closeAvatarViewer,
		currentImage: currentAvatar,
		showViewer: showAvatarViewer,
		openViewer: openAvatarViewer,
	} = useViewerManager()

	const {
		closeViewer: closePosterViewer,
		currentImage: currentPoster,
		showViewer: showPosterViewer,
		openViewer: openPosterViewer,
	} = useViewerManager()

	const {
		actions: avatarActions,
		isLoading: isAvatarLoading,
		upload: uploadAvatar,
	} = useGalleryManager({
		entityType: EntityType.AVATARS,
		entityId: user?._id,
		openViewer: openAvatarViewer,
	})

	const {
		actions: posterActions,
		isLoading: isPosterLoading,
		upload: uploadPoster,
	} = useGalleryManager({
		entityType: EntityType.POSTERS,
		entityId: user?._id,
		openViewer: openPosterViewer,
	})

	const avatars = getImageResources(user?.avatars)
	const posters = getImageResources(user?.posters)

	return (
		<AnimatePresence>
			<EditEmailModal user={user} key={1} />

			<EditPasswordModal key={2} />

			<EditProfileMiodal user={user} key={3} />

			<ResendEmailModal key={4} />

			<DeleteProfileModal key={5} />

			<AvatarsModal
				user={user}
				avatarActions={avatarActions}
				isAvatarLoading={isAvatarLoading}
				key={6}
			/>

			<PostersModal
				user={user}
				posterActions={posterActions}
				isPosterLoading={isPosterLoading}
				key={7}
			/>

			<UploadPosterModal
				isPosterLoading={isPosterLoading}
				uploadPoster={uploadPoster}
				key={8}
			/>

			<UploadAvatarModal
				isAvatarLoading={isAvatarLoading}
				uploadAvatar={uploadAvatar}
				key={9}
			/>

			<ShowImageViewer
				photos={avatars}
				showViewer={showAvatarViewer}
				currentImage={currentAvatar}
				closeViewer={closeAvatarViewer}
				key={10}
			/>

			<ShowImageViewer
				photos={posters}
				showViewer={showPosterViewer}
				currentImage={currentPoster}
				closeViewer={closePosterViewer}
				key={11}
			/>

			<SetPasswordModal key={12} />
		</AnimatePresence>
	)
}

export default ProfileModals
