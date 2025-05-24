import { Action } from '@/types/hooks/useGalleryManager'
import { Inspection } from '@/types/types/Inspection'

export type InspectionInfoProps = {
	inspection: Inspection
	imageActions: Action[]
	isActionLoading: boolean
}
