import { ApiResponse } from '@/types/types/ApiResponse'
import { Image } from '@/types/types/Image'

export type UploadAvatarModalProps = {
	isAvatarLoading: boolean
	uploadAvatar: (file: FormData) => Promise<ApiResponse<Image | null>>
}
