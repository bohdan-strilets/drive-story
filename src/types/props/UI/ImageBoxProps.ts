export type ImageBoxProps = {
	imageUrl: string
	width: string
	height: string
	margin?: string
	isBorder?: boolean
	isShadow?: boolean
	size?: 'cover' | 'contain'
}

export type ImageProps = Pick<
	ImageBoxProps,
	'imageUrl' | 'width' | 'height' | 'margin' | 'isBorder' | 'isShadow' | 'size'
>
