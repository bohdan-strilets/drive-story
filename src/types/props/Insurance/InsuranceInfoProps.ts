import { Action } from '@/types/hooks/useGalleryManager'
import { Insurance } from '@/types/types/Insurance'

export type InsuranceInfoProps = {
	imageActions: Action[]
	isActionLoading: boolean
	insurance?: Insurance
}
