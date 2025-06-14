import { FC } from 'react'

import Modal from '@/components/Modal'
import Uploader from '@/components/Uploader'

import useModal from '@/hooks/ui/useModal'

import { modalNames } from '@/config/modalConfig'

import { uploadFileParams } from '@/utils/uploadFileParams'

import { UploadPosterModalProps } from '@/types/props/Profile/UploadPosterModalProps'

const UploadPosterModal: FC<UploadPosterModalProps> = ({
	isPosterLoading,
	uploadPoster,
}) => {
	const { checkQueryParam } = useModal()

	return (
		checkQueryParam(modalNames.UPLOAD_POSTER) && (
			<Modal title="Upload poster">
				<Uploader
					fileName="image"
					fileTypes={uploadFileParams.types}
					fileSize={uploadFileParams.size}
					isLoading={isPosterLoading}
					callback={uploadPoster}
				/>
			</Modal>
		)
	)
}

export default UploadPosterModal
