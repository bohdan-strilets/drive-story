export type ImageBoxProps = {
	imageUrl: string
	width: string
	height: string
	margin?: string
	isBorder?: boolean
	isShadow?: boolean
}

export type ImageProps = Pick<
	ImageBoxProps,
	'imageUrl' | 'width' | 'height' | 'margin' | 'isBorder' | 'isShadow'
>
