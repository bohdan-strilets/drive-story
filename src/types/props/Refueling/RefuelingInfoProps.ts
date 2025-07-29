import { HTMLMotionProps } from 'motion/react'

import { RefuelingType } from '@/types/enums/RefuelingType'
import { Fueling } from '@/types/types/Fueling'

import { OverlayActionsProps } from '../Gallery/OverlayActionsProps'
import { ContactWidgetProps } from '../PhoneBook/ContactWidgetProps'

export type RefuelingInfoProps = {
	refueling: Fueling
} & Pick<OverlayActionsProps, 'overlayActions' | 'isProcessing'> &
	Pick<ContactWidgetProps, 'clearContact' | 'isCleaning'>

export type FuelTypeProps = {
	fuelType: RefuelingType
} & HTMLMotionProps<'div'>
