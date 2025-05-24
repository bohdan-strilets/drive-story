import { Inspection } from '@/types/types/Inspection'

import { InspectionInfoProps } from './InspectionInfoProps'

export type ImageGalleryProps = Pick<Inspection, 'photos'> &
	Pick<InspectionInfoProps, 'imageActions' | 'isActionLoading'>
