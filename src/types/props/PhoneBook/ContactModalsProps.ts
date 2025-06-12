import { ApiResponse } from '@/types/types/ApiResponse'
import { Contact } from '@/types/types/Contact'
import { Image } from '@/types/types/Image'

export type ContactModalsProps = {
	contact?: Contact
	contactId: string
	isLoading: boolean
	upload: (file: FormData) => Promise<ApiResponse<Image | null>>
	showViewer: boolean
	closeViewer: () => void
	currentImage: string | null
}
