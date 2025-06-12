import { ContactModalsProps } from './ContactModalsProps'

export type ShowImageViewerProps = {
	photos: string[]
} & Pick<ContactModalsProps, 'showViewer' | 'currentImage' | 'closeViewer'>
