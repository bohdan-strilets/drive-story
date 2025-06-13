import { UploaderProps } from '../Uploader/UploaderProps'

export type UploadPhotoModalProps = Pick<
	UploaderProps,
	'isLoading' | 'callback'
>
