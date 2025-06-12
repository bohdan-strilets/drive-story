import { ApiResponse } from '@/types/types/ApiResponse'
import { Image } from '@/types/types/Image'
import { Inspection } from '@/types/types/Inspection'

import { BindContactProps } from '../PhoneBook/BindContactProps'

export type InspectionModalsProps = {
	carId: string
	inspectionId?: string
	inspection?: Inspection
	upload: (file: FormData) => Promise<ApiResponse<Image | null>>
	isLoading: boolean
	showViewer: boolean
	closeViewer: () => void
	currentImage: string | null
} & Pick<BindContactProps, 'isBinding' | 'bindContact'>
