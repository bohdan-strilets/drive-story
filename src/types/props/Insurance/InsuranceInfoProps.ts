import { Insurance } from '@/types/types/Insurance'

import { OverlayActionsProps } from '../Gallery/OverlayActionsProps'
import { BindContactProps } from '../PhoneBook/BindContactProps'

export type InsuranceInfoProps = {
	insurance: Insurance
} & Pick<OverlayActionsProps, 'overlayActions' | 'isProcessing'> &
	Pick<BindContactProps<Insurance>, 'isBinding' | 'bindContact'>
