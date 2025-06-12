import { FC } from 'react'

import Modal from '@/components/Modal'
import Uploader from '@/components/Uploader'

import useModal from '@/hooks/ui/useModal'

import { modalNames } from '@/config/modalConfig'

import { uploadFileParams } from '@/utils/uploadFileParams'

import { UploadPhotoModalProps } from '@/types/props/Inspection/UploadPhotoModalProps'

const UploadPhotoModal: FC<UploadPhotoModalProps> = ({ isLoading, upload }) => {
	const { checkQueryParam } = useModal()

	return (
		checkQueryParam(modalNames.UPLOAD_CONTACT_PHOTO) && (
			<Modal title="Upload photo">
				<Uploader
					fileName="image"
					fileTypes={uploadFileParams.types}
					fileSize={uploadFileParams.size}
					isLoading={isLoading}
					callback={upload}
				/>
			</Modal>
		)
	)
}

export default UploadPhotoModal
