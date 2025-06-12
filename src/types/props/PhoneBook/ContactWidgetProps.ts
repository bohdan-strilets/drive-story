import { ApiResponse } from '@/types/types/ApiResponse'
import { Contact } from '@/types/types/Contact'

export type ContactWidgetProps = {
	contact?: Contact
	margin?: string
	isCleaning: boolean
	entityId: string
	clearContact: (
		params?: string
	) => Promise<ApiResponse<unknown | null> | undefined>
}

export type WrapperProps = Pick<ContactWidgetProps, 'margin'>
