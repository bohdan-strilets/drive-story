import { BindContactParams } from '@/types/params/BindContactParams'
import { ApiResponse } from '@/types/types/ApiResponse'
import { Contact } from '@/types/types/Contact'

export type ContactWidgetProps<T> = {
	contact?: Contact
	margin?: string
	isBinding: boolean
	bindContact: (
		params: BindContactParams
	) => Promise<ApiResponse<T | null> | undefined>
}

export type WrapperProps<T> = Pick<ContactWidgetProps<T>, 'margin'>
