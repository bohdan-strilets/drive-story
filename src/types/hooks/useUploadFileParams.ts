import { UploaderProps } from '../props/Uploader/UploaderProps'
import { FileInformation } from '../types/FileInformation'

export type Params = Pick<UploaderProps, 'fileName' | 'callback'>

export type Result = {
	previewSource: string
	hiddenFileInput: React.RefObject<HTMLInputElement | null>
	fileInfo: FileInformation | null
	triggerFileInput: () => void | undefined
	handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>
}
