import { CarEntity } from '@/types/types/CarEntity'

import { CarInformationProps } from './CarInformationProps'

export type CarMainViewProps = { car?: CarEntity } & Pick<
	CarInformationProps,
	'trims' | 'isProcessing' | 'overlayActions'
>
