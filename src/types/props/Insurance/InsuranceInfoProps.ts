import { Insurance } from '@/types/types/Insurance'

import { OverlayActionsProps } from '../Gallery/OverlayActionsProps'
import { ContactWidgetProps } from '../PhoneBook/ContactWidgetProps'

export type InsuranceInfoProps = {
	insurance: Insurance
} & Pick<OverlayActionsProps, 'overlayActions' | 'isProcessing'> &
	Pick<ContactWidgetProps, 'clearContact' | 'isCleaning'>
