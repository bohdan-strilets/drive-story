import { Image } from '@/types/types/Image'

import { InspectionModalsProps } from './InspectionModalsProps'

export type ClearGalleryModalProps = { images: string | null | Image } & Pick<
	InspectionModalsProps,
	'inspectionId'
>
