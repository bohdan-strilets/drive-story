import { ReactNode } from 'react'

import { EntityType } from '../enums/EntityType'
import { ApiResponse } from '../types/ApiResponse'
import { Image } from '../types/Image'

export type Params = {
	entityType: EntityType
	entityId?: string
}

export type Action = {
	id: string
	callback: (imageUrl: string) => void
	icon: ReactNode
	label: string
}

export type Result = {
	actions: Action[]
	isLoading: boolean
	upload: (file: FormData) => Promise<ApiResponse<Image | null>>
	showImageViewer: boolean
	currentImage: string | null
	closeViewer: () => void
}
