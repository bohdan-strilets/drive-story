import { FC } from 'react'

import { OpenGalleryButtonProps } from '@/types/props/UI/OpenGalleryButtonProps'

import { Button, Icon } from './OpenGalleryButton.styled'

const OpenGalleryButton: FC<OpenGalleryButtonProps> = ({
	onClick,
	children,
	width,
	height = '100%',
}) => {
	return (
		<Button onClick={onClick} width={width} height={height}>
			<Icon className="gallery-icon" />
			{children}
		</Button>
	)
}

export default OpenGalleryButton
