import { OverlayActionsProps } from './OverlayActionsProps'

export type GalleryProps = {
	images: string[]
	isOverlay?: boolean
	itemsPerPage?: number
	itemHeight?: string
} & Pick<OverlayActionsProps, 'overlayActions' | 'isActionLoading'>

export type ItemProps = Pick<GalleryProps, 'itemHeight'>
