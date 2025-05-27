import { Action } from '@/types/hooks/useGalleryManager'
import { Contact } from '@/types/types/Contact'

export type ContactInfoProps = {
	contact: Contact
	imageActions: Action[]
	isActionLoading: boolean
}
