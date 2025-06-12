import { Inspection } from '@/types/types/Inspection'

import { InspectionInfoProps } from './InspectionInfoProps'

export type InspectionMainViewProps = { inspection?: Inspection } & Pick<
	InspectionInfoProps,
	'overlayActions' | 'isProcessing' | 'clearContact' | 'isCleaning'
>
