import { OverlayActionsProps } from './OverlayActionsProps'

export type GalleryProps = {
	images: string[]
	isShowOverlay?: boolean
	itemsPerPage?: number
	itemHeight?: string
} & Pick<OverlayActionsProps, 'overlayActions' | 'isProcessing'>

export type ItemProps = Pick<GalleryProps, 'itemHeight'>
