import { Insurance } from '@/types/types/Insurance'

import { InsuranceInfoProps } from './InsuranceInfoProps'

export type InsuranceMainViewProps = {
	insurance?: Insurance
} & Pick<
	InsuranceInfoProps<Insurance>,
	'overlayActions' | 'isProcessing' | 'isBinding' | 'bindContact'
>
