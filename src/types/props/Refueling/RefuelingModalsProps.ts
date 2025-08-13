import { ApiResponse } from '@/types/types/ApiResponse'
import { Fueling } from '@/types/types/Fueling'
import { Image } from '@/types/types/Image'

import { BindContactProps } from '../PhoneBook/BindContactProps'

export type RefuelingModalsProps = {
	isLoading: boolean
	upload: (file: FormData) => Promise<ApiResponse<Image | null>>
	refueling: Fueling
	showViewer: boolean
	closeViewer: () => void
	currentImage: string | null
	refuelingId: string
	carId?: string
} & Pick<BindContactProps, 'isBinding' | 'bindContact'>
