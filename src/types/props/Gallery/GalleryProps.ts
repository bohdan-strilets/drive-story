import { OverlayActionsProps } from './OverlayActionsProps'

export type GalleryProps = {
	images: string[]
	isOverlay?: boolean
	itemsPerPage?: number
} & Pick<OverlayActionsProps, 'overlayActions' | 'isActionLoading'>
