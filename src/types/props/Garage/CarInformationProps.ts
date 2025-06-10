import { Action } from '@/types/hooks/useGalleryManager'
import { CarEntity } from '@/types/types/CarEntity'
import { CarTrim } from '@/types/types/CarQuery'

export type CarInformationProps = {
	imageActions: Action[]
	isActionLoading: boolean
	car: CarEntity
	trims?: CarTrim
}
