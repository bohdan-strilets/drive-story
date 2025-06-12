import { BindContactParams } from '@/types/params/BindContactParams'
import { ApiResponse } from '@/types/types/ApiResponse'

export type BindContactProps = {
	isBinding: boolean
	entityId: string
	bindContact: (
		params: BindContactParams
	) => Promise<ApiResponse<unknown | null> | undefined>
}
