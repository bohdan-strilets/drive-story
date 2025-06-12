import { Insurance } from '@/types/types/Insurance'

import { InsuranceInfoProps } from './InsuranceInfoProps'

export type InsuranceMainViewProps = {
	insurance?: Insurance
} & Pick<
	InsuranceInfoProps,
	'overlayActions' | 'isProcessing' | 'clearContact' | 'isCleaning'
>
