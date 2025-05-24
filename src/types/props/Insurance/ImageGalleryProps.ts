import { Insurance } from '@/types/types/Insurance'

import { InsuranceInfoProps } from './InsuranceInfoProps'

export type ImageGalleryProps = Pick<Insurance, 'photos'> &
	Pick<InsuranceInfoProps, 'imageActions' | 'isActionLoading'>
