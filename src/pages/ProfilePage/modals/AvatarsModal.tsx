import { FC } from 'react'

import Gallery from '@/components/Gallery'
import Modal from '@/components/Modal'
import Paragraph from '@/components/UI/Paragraph'

import useModal from '@/hooks/ui/useModal'

import { modalNames } from '@/config/modalConfig'

import { getImageResources } from '@/utils/getImageResources'

import { isImage } from '@/types/guards/isImage'
import { AvatarsModalProps } from '@/types/props/Profile/AvatarsModalProps'

const AvatarsModal: FC<AvatarsModalProps> = ({
	user,
	avatarActions,
	isAvatarLoading,
}) => {
	const { checkQueryParam } = useModal()
	const avatars = getImageResources(user.avatars)

	return (
		checkQueryParam(modalNames.USER_AVATARS) && (
			<Modal title="Avatars">
				{user && isImage(user.avatars) && avatars.length > 0 ? (
					<Gallery
						images={avatars}
						isShowOverlay={true}
						overlayActions={avatarActions}
						isProcessing={isAvatarLoading}
						itemHeight="210px"
					/>
				) : (
					<Paragraph color="black" textAlign="center">
						You haven't uploaded anything here yet...
					</Paragraph>
				)}
			</Modal>
		)
	)
}

export default AvatarsModal
