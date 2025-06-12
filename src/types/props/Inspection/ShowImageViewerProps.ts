import { InspectionModalsProps } from './InspectionModalsProps'

export type ShowImageViewerProps = {
	photos: string[]
} & Pick<InspectionModalsProps, 'showViewer' | 'currentImage' | 'closeViewer'>
