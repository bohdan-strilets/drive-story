import { FC } from 'react'

import Modal from '@/components/Modal'
import Uploader from '@/components/Uploader'

import useModal from '@/hooks/ui/useModal'

import { modalNames } from '@/config/modalConfig'

import { uploadFileParams } from '@/utils/uploadFileParams'

import { UploadAvatarModalProps } from '@/types/props/Profile/UploadAvatarModalProps'

const UploadAvatarModal: FC<UploadAvatarModalProps> = ({
	isAvatarLoading,
	uploadAvatar,
}) => {
	const { checkQueryParam } = useModal()

	return (
		checkQueryParam(modalNames.UPLOAD_AVATAR) && (
			<Modal title="Upload avatar">
				<Uploader
					fileName="image"
					fileTypes={uploadFileParams.types}
					fileSize={uploadFileParams.size}
					isLoading={isAvatarLoading}
					callback={uploadAvatar}
				/>
			</Modal>
		)
	)
}

export default UploadAvatarModal
