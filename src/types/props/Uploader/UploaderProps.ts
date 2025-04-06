import { ApiResponse } from '@/types/types/ApiResponse'
import { Image } from '@/types/types/Image'

export type UploaderProps = {
	fileName: string
	fileTypes: string
	fileSize: number
	isLoading: boolean
	callback: (file: FormData) => Promise<ApiResponse<Image | null> | undefined>
}
