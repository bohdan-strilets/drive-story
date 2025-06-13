export type ShowImageViewerProps = {
	photos: string[]
	showViewer: boolean
	currentImage: string | null
	closeViewer: () => void
}
