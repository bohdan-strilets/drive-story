import { InsuranceModalsProps } from './InsuranceModalsProps'

export type ShowImageViewerProps = {
	photos: string[]
} & Pick<InsuranceModalsProps, 'showViewer' | 'currentImage' | 'closeViewer'>
