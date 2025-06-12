import { Contact } from '@/types/types/Contact'

import { OverlayActionsProps } from '../Gallery/OverlayActionsProps'

export type ContactInfoProps = {
	contact: Contact
} & Pick<OverlayActionsProps, 'overlayActions' | 'isProcessing'>
