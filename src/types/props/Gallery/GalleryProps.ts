import { OverlayActionsProps } from './OverlayActionsProps'

export type GalleryProps = {
	images: string[]
	isOverlay?: boolean
} & Pick<OverlayActionsProps, 'overlayActions' | 'isActionLoading'>
