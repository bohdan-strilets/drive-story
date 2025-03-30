import { FileInformation } from '@/types/types/FileInformation'

export type PreviewProps = {
	previewSource: string
	fileInfo: FileInformation | null
	validationSizeFile: number
}

export type ImageSizeProps = {
	imageSize: number
} & Pick<PreviewProps, 'validationSizeFile'>
