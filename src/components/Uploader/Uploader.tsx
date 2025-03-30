import { FC } from 'react'

import useModal from '@/hooks/ui/useModal'
import useUploadFile from '@/hooks/ui/useUploadFile'

import { UploaderProps } from '@/types/props/Uploader/UploaderProps'

import Button from '../UI/Button'
import Loader from '../UI/Loader'
import Paragraph from '../UI/Paragraph'

import Preview from './Preview'
import { Accent, Icon, Input, Label, UploadButton } from './Uploader.styled'

const Uploader: FC<UploaderProps> = ({
	fileName,
	fileTypes,
	fileSize,
	isLoading = false,
	callback,
}) => {
	const { onClose } = useModal()
	const {
		handleFileChange,
		handleSubmit,
		hiddenFileInput,
		previewSource,
		triggerFileInput,
		fileInfo,
	} = useUploadFile({ fileName, callback, handleCloseModal: onClose })

	return (
		<>
			<Paragraph color="black">
				The selected file must be in one of the following formats
				<Accent>{fileTypes}.</Accent>The file must not exceed
				<Accent>{fileSize} MB</Accent>
			</Paragraph>
			<form encType="multipart/from-data" onSubmit={handleSubmit}>
				<label>
					<Input
						type="file"
						name={fileName}
						ref={hiddenFileInput}
						accept={fileTypes}
						onChange={handleFileChange}
						multiple
					/>
					<UploadButton type="button" onClick={triggerFileInput}>
						<Icon className="upload-icon" />
						<Label>Select file</Label>
					</UploadButton>
				</label>

				{previewSource && (
					<Preview
						previewSource={previewSource}
						fileInfo={fileInfo}
						validationSizeFile={fileSize}
					/>
				)}

				{isLoading && <Loader color="gray" margin="0 0 15px 0" />}

				<Button
					background="yellow"
					color="black"
					hoverBackground="gray"
					hoverColor="white"
					width="100%"
					type="submit"
					disabled={isLoading}
				>
					{isLoading ? '...' : 'upload'}
				</Button>
			</form>
		</>
	)
}

export default Uploader
