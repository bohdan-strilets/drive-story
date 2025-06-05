export type ImageViewerProps = {
	imageUrl: string | null
	closeViewer: () => void
	imageUrls: string[]
}

export type TimerDisplayProps = { slideDuration: number }
