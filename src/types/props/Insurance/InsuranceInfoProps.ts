import { Action } from '@/types/hooks/useGalleryManager'
import { BindContactParams } from '@/types/params/BindContactParams'
import { ApiResponse } from '@/types/types/ApiResponse'
import { Insurance } from '@/types/types/Insurance'

export type InsuranceInfoProps<T> = {
	imageActions: Action[]
	isActionLoading: boolean
	insurance: Insurance
	isBinding: boolean
	bindContact: (
		params: BindContactParams
	) => Promise<ApiResponse<T | null> | undefined>
}
