import { Contact } from '@/types/types/Contact'

import { ContactInfoProps } from './ContactInfoProps'

export type ImageGalleryProps = Pick<Contact, 'photos'> &
	Pick<ContactInfoProps, 'imageActions' | 'isActionLoading'>
