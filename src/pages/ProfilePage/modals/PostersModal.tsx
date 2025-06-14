import { FC } from 'react'

import Gallery from '@/components/Gallery'
import Modal from '@/components/Modal'
import Paragraph from '@/components/UI/Paragraph'

import useModal from '@/hooks/ui/useModal'

import { modalNames } from '@/config/modalConfig'

import { getImageResources } from '@/utils/getImageResources'

import { isImage } from '@/types/guards/isImage'
import { PostersModalProps } from '@/types/props/Profile/PostersModalProps'

const PostersModal: FC<PostersModalProps> = ({
	user,
	posterActions,
	isPosterLoading,
}) => {
	const { checkQueryParam } = useModal()
	const posters = getImageResources(user.posters)

	return (
		checkQueryParam(modalNames.USER_POSTERS) && (
			<Modal title="Posters">
				{user && isImage(user.posters) && posters.length > 0 ? (
					<Gallery
						images={user?.posters.resources}
						isShowOverlay={true}
						overlayActions={posterActions}
						isProcessing={isPosterLoading}
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

export default PostersModal
