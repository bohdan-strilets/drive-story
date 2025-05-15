import { Action } from '@/types/hooks/useGalleryManager'
import { CarEntity } from '@/types/types/CarEntity'

export type CarInformationProps = {
	imageActions: Action[]
	isActionLoading: boolean
	car?: CarEntity
}
