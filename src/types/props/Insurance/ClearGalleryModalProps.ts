import { Image } from '@/types/types/Image'

import { InsuranceModalsProps } from './InsuranceModalsProps'

export type ClearGalleryModalProps = { images: string | null | Image } & Pick<
	InsuranceModalsProps,
	'insuranceId'
>
