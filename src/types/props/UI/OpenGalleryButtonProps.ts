import { ReactNode } from 'react'

export type OpenGalleryButtonProps = {
	children: ReactNode
	onClick: () => void
	width: string
	height?: string
}

export type ButtonProps = Pick<OpenGalleryButtonProps, 'width' | 'height'>
