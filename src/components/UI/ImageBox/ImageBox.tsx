import { FC } from 'react'

import { ImageBoxProps } from '@/types/props/UI/ImageBoxProps'

import { Image } from './ImageBox.styled'

const ImageBox: FC<ImageBoxProps> = ({
	imageUrl,
	width,
	height,
	margin,
	isBorder = false,
	isShadow = false,
	size = 'cover',
}) => {
	return (
		<Image
			imageUrl={imageUrl}
			width={width}
			height={height}
			margin={margin}
			isBorder={isBorder}
			isShadow={isShadow}
			size={size}
		/>
	)
}

export default ImageBox
