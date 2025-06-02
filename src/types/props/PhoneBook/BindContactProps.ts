import { BindContactParams } from '@/types/params/BindContactParams'
import { ApiResponse } from '@/types/types/ApiResponse'

export type BindContactProps<T> = {
	isBinding: boolean
	bindContact: (
		params: BindContactParams
	) => Promise<ApiResponse<T | null> | undefined>
}
