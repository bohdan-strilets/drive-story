import { ReactNode } from 'react'

export type ImageBoxProps = {
	imageUrl: string
	width: string
	height: string
	margin?: string
	isBorder?: boolean
	isShadow?: boolean
	size?: 'cover' | 'contain'
	children?: ReactNode
	padding?: string
	gradient?: string
}

export type ImageProps = Pick<
	ImageBoxProps,
	| 'imageUrl'
	| 'width'
	| 'height'
	| 'margin'
	| 'isBorder'
	| 'isShadow'
	| 'size'
	| 'padding'
	| 'gradient'
>
