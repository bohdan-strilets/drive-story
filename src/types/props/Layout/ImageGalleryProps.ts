import { Image } from '@/types/types/Image'

import { OverlayActionsProps } from '../Gallery/OverlayActionsProps'

export type ImageGalleryProps = { photos: string | Image | null } & Pick<
	OverlayActionsProps,
	'overlayActions' | 'isProcessing'
>
