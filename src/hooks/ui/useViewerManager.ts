import { useState } from 'react'

export const useViewerManager = () => {
	const [showViewer, setShowViewer] = useState(false)
	const [currentImage, setCurrentImage] = useState<string | null>(null)

	const openViewer = (imageUrl: string) => {
		setShowViewer(true)
		setCurrentImage(imageUrl)
	}

	const closeViewer = () => {
		setShowViewer(false)
		setCurrentImage(null)
	}

	return { showViewer, currentImage, closeViewer, openViewer }
}
