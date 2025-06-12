import { ApiResponse } from '@/types/types/ApiResponse'
import { Image } from '@/types/types/Image'
import { Insurance } from '@/types/types/Insurance'

import { BindContactProps } from '../PhoneBook/BindContactProps'

export type InsuranceModalsProps = {
	carId: string
	insuranceId?: string
	insurance?: Insurance
	isLoading: boolean
	upload: (file: FormData) => Promise<ApiResponse<Image | null>>
	showViewer: boolean
	closeViewer: () => void
	currentImage: string | null
} & Pick<BindContactProps<Insurance>, 'isBinding' | 'bindContact'>
