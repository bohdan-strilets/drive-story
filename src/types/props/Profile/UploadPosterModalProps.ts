import { ApiResponse } from '@/types/types/ApiResponse'
import { Image } from '@/types/types/Image'

export type UploadPosterModalProps = {
	isPosterLoading: boolean
	uploadPoster: (file: FormData) => Promise<ApiResponse<Image | null>>
}
