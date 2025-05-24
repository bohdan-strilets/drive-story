import { CarEntity } from '@/types/types/CarEntity'

import { CarInformationProps } from './CarInformationProps'

export type ImageGalleryProps = Pick<CarEntity, 'photos'> &
	Pick<CarInformationProps, 'imageActions' | 'isActionLoading'>
