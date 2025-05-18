import { FC } from 'react'

import useUploadFile from '@/hooks/ui/useUploadFile'

import { UploaderProps } from '@/types/props/Uploader/UploaderProps'

import BigButton from '../UI/BigButton'
import Button from '../UI/Button'
import Loader from '../UI/Loader'
import Paragraph from '../UI/Paragraph'

import Preview from './Preview'
import { Accent, Input } from './Uploader.styled'

const Uploader: FC<UploaderProps> = ({
	fileName,
	fileTypes,
	fileSize,
	isLoading = false,
	callback,
}) => {
	const {
		handleFileChange,
		handleSubmit,
		hiddenFileInput,
		previewSource,
		triggerFileInput,
		fileInfo,
	} = useUploadFile({ fileName, callback })

	return (
		<>
			<Paragraph background="white" color="black">
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
					<BigButton
						onClick={triggerFileInput}
						label="Select file"
						margin="0 0 15px 0"
					/>
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
					disabled={isLoading || !fileInfo}
				>
					{isLoading ? '...' : 'upload'}
				</Button>
			</form>
		</>
	)
}

export default Uploader
