import { Contact } from '@/types/types/Contact'

import { ContactInfoProps } from './ContactInfoProps'

export type ContactMainViewProps = {
	contact?: Contact
} & Pick<ContactInfoProps, 'isProcessing' | 'overlayActions'>
