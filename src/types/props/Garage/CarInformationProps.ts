import { CarEntity } from '@/types/types/CarEntity'
import { CarTrim } from '@/types/types/CarQuery'

import { OverlayActionsProps } from '../Gallery/OverlayActionsProps'

export type CarInformationProps = {
	car: CarEntity
	trims?: CarTrim
} & Pick<OverlayActionsProps, 'overlayActions' | 'isProcessing'>
