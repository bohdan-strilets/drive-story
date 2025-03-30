import { ReactNode } from 'react'

export type OpenGalleryButtonProps = {
	children: ReactNode
	onClick: () => void
	width: string
}

export type ButtonProps = Pick<OpenGalleryButtonProps, 'width'>
