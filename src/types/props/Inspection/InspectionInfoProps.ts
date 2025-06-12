import { Inspection } from '@/types/types/Inspection'

import { OverlayActionsProps } from '../Gallery/OverlayActionsProps'
import { ContactWidgetProps } from '../PhoneBook/ContactWidgetProps'

export type InspectionInfoProps = {
	inspection: Inspection
} & Pick<OverlayActionsProps, 'overlayActions' | 'isProcessing'> &
	Pick<ContactWidgetProps, 'clearContact' | 'isCleaning'>
